import { Button, Input, Typography } from "@material-tailwind/react";

const AnalyseLayout = () => {
  return (
    <div className="w-full px-2 lg:px-4 mt-4">
      <Typography variant="h3" className="text-[20px] font-bold uppercase">
        Evaluation d'une candidature
      </Typography>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <Input type="file" hidden/>
        <div className="">
          
        </div>
        <Button variant="gradient">Détails d'évaluation</Button>
      </div>
    </div>
  );
};





export default AnalyseLayout;
