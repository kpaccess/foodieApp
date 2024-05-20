"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: string;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-[#ddd6cb] px-2 py-4 no-underline hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] ${
        path === href
          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a05] to-[#f9b331]"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
