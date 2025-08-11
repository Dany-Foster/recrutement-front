import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div
      className="flex items-center w-full gap-2.5 justify-content-between relative shadow-md cursor-pointer py-1 px-2 h-[30px] border-1 bg-[#F5F7F9] border-[#F5F7F9] rounded-md"
    >
      <FaSearch className=" text-[#75767C] size-4"/>
      <h3 className=" text-xs lg:text-[12px] text-[#75767C]">Search</h3>
      <div
        className="p-2 bg-white h-[22px]  flex items-center rounded-sm absolute right-[10px] shadow-sm"
      >
        <h3 className="text-xs lg:text-[12px] font-semibold">Tab</h3>
      </div>
    </div>
  );
};

export default SearchBar;
