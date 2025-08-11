import { cn } from "../lib/utils";
import { NavLink } from "react-router-dom";
import { sidebarItems } from "../constants";

const BoutonMenu = () => {
  return (
    <nav className="flex flex-col gap-3.5 pt-5">
      {sidebarItems.map(({ id, href, label, icon }: {id:number, href: string, label: string, icon: string}) => (
        <NavLink to={href} key={id}>
            <div
              className={cn(
                "group flex items-center text-xs md:text-[14px] font-semibold cursor-pointer gap-2.5 py-[10px] px-3 rounded-lg text-[#000] hover:bg-[#000] hover:text-white hover:shadow-lg",
                {
                  "bg-[#000] !text-white shadow-lg": href === window.location.pathname,
                }
              )}
            >
              <img src={icon} alt={label} className="size-4" />
              {label}
            </div>
        </NavLink>
      ))}
    </nav>
  );
};

export default BoutonMenu;
