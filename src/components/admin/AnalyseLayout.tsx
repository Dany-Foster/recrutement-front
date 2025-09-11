import { Option, Select } from "@material-tailwind/react";
import { Evaluation, RadarChart } from "..";


const AnalyseLayout = () => {
  return (
    <div className="w-full px-2 lg:px-4 mt-4">
      <h3 className="text-[18px] font-bold">Analyses</h3>
      <p className="text-sm text-gray-500">
        Vous pouvez consulter l'analyse détaillée du candidat ici.
      </p>
      <div className="w-full flex gap-4 mt-4 items-start">
        <div className="w-[calc(100%-700px)] p-4 rounded-md shadow-md bg-white">
          {/* <RecrutmentChart /> */}
          <div className="w-72 mb-4">
            <Select label="RANDRIAMIARISON Jean De Dieu" defaultValue={""}>
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <h3 className="text-[16px] font-semibold mb-4">Statistiques du candidat</h3>
          <div className="">
            <RadarChart/>
          </div>
        </div>
        <Evaluation/>
      </div>
    </div>
  );
};


export default AnalyseLayout;
