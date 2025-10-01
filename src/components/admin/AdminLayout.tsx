import { Outlet } from "react-router-dom";
import HeaderDashboard from "../HeaderDashboard";
import NavItems from "../NavItems";
import MobileSidebar from "../MobileSidebar";

export default function AdminLayout(){
  return (
      <div className="flex flex-col lg:flex-row h-screen w-full">
        <MobileSidebar />
        <aside className="w-full max-w-[300px] hidden lg:block py-4 px-2 bg-white shadow-md">
          <NavItems />
        </aside> 
        <aside className="w-full lg:max-w-[calc(100%-300px)] h-full !bg-[#F5F7F9] lg:rounded-xl lg:shadow-md lg:border-2 border-[#EBEDEE] pt-4 lg:pt-2 px-4 py-2">
          <HeaderDashboard />
            <div className="h-[calc(100%-70px)] w-full mt-0.5 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
              <Outlet />
            </div>
        </aside>
      </div>
  );
}