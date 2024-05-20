import { Suspense } from "react";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Meal } from "@/types";
import MealsLoadingPage from "./loading";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals as Meal[]} />;
}

const MealsPage = () => {
  return (
    <>
      <header className=" gap-12 mt-12 mr-auto mb-20 ml-auto w-[90%]  text-[#ddd6cb] text-2xl">
        <h1 className="font-montserrat font-sans">
          Deliciouse meals, created{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9572a] to-[#ff8a05]">
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite receipt and cook it your self. It is easy and
          fun.
        </p>
        <p className="flex gap-4 text-2xl">
          <Link
            href="/meals/share"
            className=" inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold no-underline bg-gradient-to-r from-[#f9572a] to-[#ff9b05]"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
