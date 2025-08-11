import { MdLogout } from "react-icons/md";
// import { useState } from "react";
import SearchBar from "./SearchBar";
import BoutonMenu from "./BoutonMenu";




export default function NavItems({
  handleClick,
}: {
  handleClick?: () => void;
}) {
  const user = {
    name: "Name Entreprise",
    Email: "Contact@gmail.com",
    logo: "/assets/icons/logo2.svg",
  };

  return (
    <section
      className="flex flex-col gap-[2px] h-full"
      onClick={handleClick}
    >
    <div className="flex flex-row items-center gap-2.5 py-1">
        <img
        src={user?.logo}
        alt={user?.name}
        className="aspect-square size-[30px]"
        />
        <article className="flex flex-col justify-between !gap-[2px] max-w-full">
        <h2 className="text-xs md:text-[14px] font-bold text-dark-200 truncate">
            {user?.name}
        </h2>
        <p className="text-gray-500 text-xs md:text-[12px] font-normal truncate">
            {user?.Email}
        </p>
        </article>
    </div>
      <hr className="bg-[#D9D9D9] size-[1.5px] border border-none w-full" />
      <div
        className="flex flex-col justify-between gap-1 h-full pt-4"
      >
        <div className="w-full flex flex-col">
          <SearchBar />
          <BoutonMenu />
        </div>
        <footer className="border w-full py-2 px-6 rounded-md bg-[#000] flex justify-between items-center gap-2 cursor-pointer">
          <h2 className="text-[14px] font-semibold text-white">
            Se déconnecter
          </h2>
          <button className="text-white">
            <MdLogout />
          </button>
        </footer>
      </div>
    </section>
  );
}
