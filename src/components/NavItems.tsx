import { MdLogout } from "react-icons/md";
// import { useState } from "react";
import { Button } from "@material-tailwind/react";
import BoutonMenu from "./BoutonMenu";
import { useData } from "./Hooks/useData";
import SearchBar from "./SearchBar";

export default function NavItems({
  handleClick,
}: {
  handleClick?: () => void;
}) {
  const user = {
    logo: "/assets/icons/logo2.svg",
  };

  const { data, logout, dispatch } = useData();

  const Log = () => {
    const Interval = setInterval(() => {
      dispatch({ type: "loading" });
    }, 1000);

    return () => {
      clearInterval(Interval);
      logout();
    };
  };

  return (
    <section className="flex flex-col gap-[2px] h-full" onClick={handleClick}>
      <div className="flex flex-row items-center gap-2.5 py-1">
        <img
          src={user?.logo}
          alt={data?.user?.name}
          className="aspect-square size-[30px]"
        />
        <article className="flex flex-col justify-between !gap-[2px] max-w-full">
          <h2 className="text-xs md:text-[14px] font-bold text-dark-200 truncate">
            {data?.entreprise?.nom}
          </h2>
          <p className="text-gray-500 text-xs md:text-[12px] font-normal truncate">
            {data?.entreprise?.email_E}
          </p>
        </article>
      </div>
      <hr className="bg-[#D9D9D9] size-[1.5px] border border-none w-full" />
      <div className="flex flex-col justify-between gap-1 h-full pt-4">
        <div className="w-full flex flex-col gap-4">
          <SearchBar />
          <BoutonMenu />
        </div>
        <footer className="border w-full rounded-md bg-[#000]  cursor-pointer">
          <Button
            className="w-full text-white flex justify-between items-center gap-2"
            onClick={logout}
          >
            <h2 className="text-[12px] font-semibold text-white">
              Se déconnecter
            </h2>
            <MdLogout size={25} />
          </Button>
        </footer>
      </div>
    </section>
  );
}
