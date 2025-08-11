export default function HeaderDashboard() {
  return (
    <header
      className="px-4 py-2 lg:px-5 lg:py-2 w-full flex items-center bg-white border-solid border-2 border-[#F5F7F9] shadow-md rounded-md justify-between z-100"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] font-semibold ">Bienvenue UserName</h3>
        <p className="text-[12px] font-normal text-[#75767C]">
          Lundi, Juillet 3, 2025
        </p>
      </div>
    </header>
  );
}