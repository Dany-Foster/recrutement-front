import { NavLink, useLocation } from "react-router-dom";
import { sidebarItems } from "../constants";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";


const BoutonMenu = () => {
  const location = useLocation()
  return (
    <List className="p-0 m-0">
      {sidebarItems.map(({ id, href, label, icon }: {id:number, href: string, label: string, icon: string}) => (
          <NavLink to={href} key={id}>
              <ListItem
                selected={href === location.pathname}
                className="text-[14px] font-medium hover:cursor-pointer"
              >
                <ListItemPrefix>
                  <img src={icon} alt={label} className="size-4" />
                </ListItemPrefix>
                {label}
              </ListItem>
          </NavLink>
      ))}
        </List>
  );
};

export default BoutonMenu;
