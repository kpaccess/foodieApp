import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
import { SaveMealProps } from "@/types";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Error fetching meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: SaveMealProps["meal"]) {
  if (!meal.title || !meal.instructions) {
    throw new Error("Meal title is required to generate a slug");
  }
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  let extension;
  let bufferedImage;

  if (meal.image instanceof File) {
    extension = meal.image.name.split(".").pop();
    bufferedImage = await meal?.image?.arrayBuffer();
  } else {
    throw new Error("Image must be a File instance");
  }

  if (!extension) {
    throw new Error("Failed to determine image extension.");
  }

  const fileName = `${meal.slug}.${extension}`;
  const filePath = `public/images/${fileName}`;

  const stream = fs.createWriteStream(filePath);

  if (bufferedImage) {
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("Saving image failed");
      }
    });
  }

  meal.image = `/images/${fileName}`;

  try {
    db.prepare(
      `
      INSERT INTO meals(title, summary, instructions, creator, creator_email, image, slug)
      VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
    ).run(meal);
  } catch (error) {
    throw new Error("Database operation failed: ", error.message);
  }
}
