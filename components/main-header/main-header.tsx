import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-8 py-4 md:px-[10%] md:py-8">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 no-underline font-bold tracking-[0.15rem] text-2xl"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className="w-20 h-20 object-contain drop-shadow-[0 0 0.75rem rgba(0, 0, 0, 0.5]"
            priority
          />
          NextLevel Food
        </Link>
        <nav>
          <ul className="list-none m-0 p-0 flex gap-6 text-base">
            <li>
              <Link
                href="/meals"
                className="text-[#ddd6cb] px-2 py-4 no-underline hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] active:bg-gradient-to-r from-[#ff8a05] to-[#f9b331]"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="no-underline text-[#ddd6cb] px-2 py-4 hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] active:bg-gradient-to-r from-[#ff8a05] to-[#f9b331]"
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
