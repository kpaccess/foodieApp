"use server";

import { saveMeal } from "./meals";

function isInvalidText(text: any): boolean {
  return !text || text.trim() === "";
}

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File | string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email?.toString().includes("@") ||
    !meal.image ||
    (typeof meal.image !== "string" && meal.image.size === 0)
  ) {
    throw new Error("Invalid input");
  }

  saveMeal(meal);
}
