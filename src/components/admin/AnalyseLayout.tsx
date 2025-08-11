import RecrutmentChart from "components/ChartReact";

const AnalyseLayout = () => {
  return <div className="w-full px-2 lg:px-4 mt-4 ">
    <h3 className="text-[18px] font-bold">Analyses</h3>
    <p className="text-sm text-gray-500">Vous pouvez consulter les analyses.</p>
    <div className="w-[700px] mt-2 p-4 rounded-md shadow-md bg-white">
      <RecrutmentChart/>
    </div>
  </div>;
};

export default AnalyseLayout;
