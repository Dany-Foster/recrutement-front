// import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { useState } from "react";




const MobileSidebar = () => {
  const [Open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!Open)
  }

  return (
      <>
      <div
        className="lg:hidden flex flex-col gap-5 border-b border-[#D9D9D9] w-full  max-w-7xl mx-auto px-4 lg:px-8 relative"
      >
        <div>
          <header className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-1.5 py-4">
              <img
                src="/assets/icons/logo2.svg"
                alt="logo"
                className="size-[30px]"
              />
              <h1 className="text-base md:text-[14px] font-bold text-dark-100">
                Talvisio
              </h1>
            </Link>
            <button onClick={handleClick}>
              <img
                src="/assets/icons/menu.svg"
                alt="menu"
                className="size-7 cursor-pointer"
              />
            </button>
          </header>
        </div>
      </div>
      <Drawer open={Open} onClose={handleClick} className="p-4">
        <NavItems handleClick={handleClick}/>
      </Drawer>
      </>
  );
};


export default MobileSidebar;
