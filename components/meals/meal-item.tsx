import Image from "next/image";
import Link from "next/link";
import { Meal } from "@/types";

const MealItem = ({ title, slug, image, summary, creator }: Meal) => {
  return (
    <article className="flex flex-col justify-between h-full rounded-lg shadow shadow-blue-500/40 text-[#ddd6cb]">
      <header>
        <div className=" relative h-60">
          <Image src={image} alt={title} fill className=" object-cover" />
        </div>
        <div className=" pt-2 pr-4 pb-0 pl-4 ">
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className=" pt-4 pr-1 pb-0 pl-4">{summary}</p>
        <div className=" p-4 text-center">
          <Link
            href={`/meals/${slug}`}
            className=" inline-block mt-4 py-2 px-4   bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
