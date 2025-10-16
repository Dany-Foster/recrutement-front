import { Button, Typography } from "@material-tailwind/react";

interface Candidat {
  id: number;
  nom: string;
  poste: string;
}
export default function CandidatCard({ candidat }: { candidat: Candidat }) {
  return (
    <div className="w-full border border-black rounded-lg p-2 hover:shadow-lg flex items-center justify-between">
      <div className="flex flex-col gap-[4px]">
        <Typography
          variant="h5"
          className="text-[14px] font-semibold text-black"
        >
          R{candidat.nom}
        </Typography>
        <Typography variant="small" className="text-[12px] font-medium">
          {candidat.poste}
        </Typography>
      </div>
      <div className="flex- flex-col gap-[4px]">
        <Typography
          variant="small"
          className="text-[12px] font-medium text-gray-600"
        >
          <span className="font-semibold text-black">Score:</span>{" "}
          <span>75 %</span>
        </Typography>
      </div>
      <div className="flex- flex-col gap-[4px]">
        <Button
          size="sm"
          variant="outlined"
          className="hover:bg-black hover:text-white hover:shadow-md"
        >
          Détails
        </Button>
      </div>
    </div>
  );
}
