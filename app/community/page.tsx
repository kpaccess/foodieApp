import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import eventsIcon from "@/assets/icons/events.png";
import communityIcon from "@/assets/icons/community.png";

const Community = () => {
  return (
    <>
      <header className=" gap-12 mt-12 mb-20 mr-auto ml-auto max-w-[75rem] text-2xl text-center text-[#ddd6cb] w-[90%]">
        <h1>
          One shared passion:{" "}
          <span className="bg-clip-text text-transparent text-3xl font-bold uppercase  bg-gradient-to-r from-[#f9572a] to-[#ffc905] tracking-[0.15rem]">
            Food
          </span>
          <p className=" font-bold text-[#ddd6cb] m-0">
            Join our community and share your favorite recipes!
          </p>
        </h1>
      </header>
      <main className="w-[90%] max-w-[40rem] my-0 mx-auto text-center">
        <h2 className=" text-3xl mb-12 text-[#ddd6cb]">Community Perks</h2>

        <ul className=" list-none my-12 mx-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className=" w-32 h-32 object-contain "
            />
            <p className=" font-bold text-[#ddd6cb] m-0 text-2xl">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className=" w-32 h-32 object-contain"
            />
            <p className=" font-bold text-[#ddd6cb] m-0 text-2xl">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className=" w-32 h-32 object-contain"
            />
            <p className=" text-2xl font-bold text-[#ddd6cb] m-0 font-montserrat">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Community;
