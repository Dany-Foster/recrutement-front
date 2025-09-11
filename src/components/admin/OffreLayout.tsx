import {  Typography } from "@material-tailwind/react";
import { OffreTable } from "..";


const OffreLayout = () => {
  return (
    <div className="w-full px-4 mt-2">
      <div className="w-full mb-4">
        <Typography variant="h3" className="text-[20px] font-bold uppercase">
          Offres d'emplois
        </Typography>
        <Typography variant="small" color="blue-gray" className="pl-2">Vous pouvez consulter et ajouter un offre d'emploi</Typography>
      </div>
      <OffreTable />
    </div>
  )
};

export default OffreLayout;
