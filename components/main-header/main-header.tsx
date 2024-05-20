import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-8 py-4 md:px-[10%] md:py-8">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 no-underline font-bold tracking-[0.15rem] text-2xl uppercase"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className="w-20 h-20 object-contain drop-shadow-[0 0 0.75rem rgba(0, 0, 0, 0.5] "
            priority
          />
          NextLevel Food
        </Link>
        <nav>
          <ul className="list-none m-0 p-0 flex gap-6 text-base">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
