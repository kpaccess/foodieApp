import Image from "next/image";
import { notFound } from "next/navigation";

import { montserrat } from "@/app/fonts";
import { getMeal } from "@/lib/meals";
import { Meal } from "@/types";

const MealDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const meal = getMeal(slug) as Meal;

  if (!meal) {
    notFound();
  }

  meal.instructions = meal?.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className="flex py-8 px-4 gap-12 m-auto max-w-[80rem]">
        <div className="relative w-[30rem] h-80">
          <Image
            className=" object-cover rounded-lg shadow-sm"
            src={meal.image}
            alt={meal.title}
            fill
          />
        </div>
        <div
          className={`pt-2 pr-4 pb-0 pl-4 text-[#ddd6cb] max-w-[40rem] ${montserrat.className}`}
        >
          <h1 className={` mt-4 text-6xl uppercase ${montserrat.className}`}>
            {meal.title}
          </h1>
          <p className=" mt-8 text-2xl text-[#cfa69b] font-italic">
            by{" "}
            <a
              href={`mailto: ${meal.creator_email}`}
              className=" text-transparent bg-clip-text bg-gradient-to-r from-[#f9572a] to-[#ff8a05]"
            >
              {meal.creator}
            </a>
          </p>
          <p className=" mt-8 text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className=" text-2xl bg-[#6e6464] text-[#13120f] rounded-lg p-8 max-w-[60rem] my-8 mx-auto"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
