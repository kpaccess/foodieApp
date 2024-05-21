"use client";
import { montserrat } from "@/app/fonts";

import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

const ShareMealsPage = () => {
  return (
    <>
      <header className=" gap-12 mt-12 mr-auto mb-20 ml-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl">
        <h1 className={`${montserrat.className} font-sans`}>
          Share your{" "}
          <span className=" text-transparent bg-clip-text gradient bg-gradient-to-r from-[#f9572a] to-[#ff8a05]">
            favorite meal
          </span>
          <p>Or any other meal you feel needs sharing!</p>
        </h1>
      </header>
      <main className="w-[90%] max-w-[75rem] my-12 mx-auto text-white">
        <form action="" className="max-w-[50rem]">
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className={`text-[#b3aea5] block mb-2 ${montserrat.className} uppercase font-bold w-full`}
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`block w-full py-2 px-4 rounded border-solid border-[#454952] ${montserrat.className} text-[#ddd6cb] bg-[#1c2027] w-full`}
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className={`text-[#b3aea5] block mb-2 ${montserrat.className}font-bold uppercase`}
              >
                Your email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={`block w-full py-2 px-4 rounded border-solid border-[#454952] ${montserrat.className} text-[#ddd6cb] bg-[#1c2027] w-full`}
              />
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="title"
                className={`text-[#b3aea5] block mb-2 ${montserrat.className}font-bold w-full uppercase`}
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className={`block w-full py-2 px-4 rounded border-solid border-[#454952] ${montserrat.className} text-[#ddd6cb] bg-[#1c2027] w-full`}
              />
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="summary"
                className={`text-[#b3aea5] block mb-2 ${montserrat.className}font-bold w-full uppercase`}
              >
                Short Summary
              </label>
              <input
                type="text"
                id="summary"
                name="summary"
                className={`block w-full py-2 px-4 rounded border-solid border-[#454952] ${montserrat.className} text-[#ddd6cb] bg-[#1c2027] w-full`}
              />
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="instructions"
                className={`text-[#b3aea5] block mb-2 ${montserrat.className}font-bold w-full uppercase`}
              >
                Instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={10}
                className={`block w-full py-2 px-4 rounded border-solid border-[#454952] ${montserrat.className} text-[#ddd6cb] bg-[#1c2027] w-full`}
                required
              />
            </p>
          </div>
          <ImagePicker label="Your image" name="image" />
          <p className=" text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealsPage;
