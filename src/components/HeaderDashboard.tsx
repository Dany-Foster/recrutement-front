import {
  Avatar,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { formatDate } from "../lib/utils";
import AuthContext from "./Hooks/Authentification.context";
export default function HeaderDashboard() {
  const { data } = useContext(AuthContext);
  const date = new Date();
  const Androany = formatDate(`${date}`);
  return (
    <header className="px-4 py-2 lg:px-5 lg:py-2 w-full flex items-center bg-white border-solid border-2 border-[#F5F7F9] shadow-md rounded-md justify-between z-100">
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] font-semibold ">
          Bienvenue {data?.user?.name}
        </h3>
        <p className="text-[12px] font-normal text-[#75767C]">{Androany}</p>
      </div>
      <div className="flex items-center gap-4">
        <NotificationList />
        <ProfilDropDown />
      </div>
    </header>
  );
}

export function NotificationList() {
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <IconButton variant="text" size="sm" className="rounded-lg">
          <IoNotifications size={20} />
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col items-center gap-4 relative">
        <MenuItem className="">
          <div className=" pointer-cursor">
            <Typography
              variant="h6"
              color="blue-gray"
              className="text-[16px] font-semibold"
            >
              Notifications
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar
            className=" cursor-pointer"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            size="sm"
            variant="circular"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-[14px] font-semibold text-black">
              Nouvelle candidature
            </h3>
            <p className="text-[12px] font-normal text-[#75767C]">
              Lundi, Juillet 3, 2025
            </p>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function ProfilDropDown() {
  return (
    <Menu
      placement="bottom-end"
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Avatar
          className=" cursor-pointer"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          size="sm"
          variant="circular"
        />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2 py-2 pl-2 pr-8">
          <CgProfile size={15} />
          <Typography variant="small" className="font-medium">
            Profil
          </Typography>
        </MenuItem>
        <hr className="my-3" />
        <MenuItem className="flex items-center gap-2 py-2 pl-2 pr-8 text-red-500 hover:bg-red-100/50 focus:bg-red-100/50 active:bg-red-100/50">
          <TbLogout2 size={15} />
          <Typography variant="small" className="font-medium">
            Se déconnecter
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
