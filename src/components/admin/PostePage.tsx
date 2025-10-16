import { Typography } from "@material-tailwind/react";

export default function PostePage() {
  return (
    <div className="w-full px-4 mt-2">
      <div className="w-full mb-4">
        <Typography variant="h3" className="text-[20px] font-bold uppercase">
          Poste
        </Typography>
        <Typography variant="small" color="blue-gray" className="pl-2">
          Vous pouvez consulter et ajouter poste existant dans votre entreprise
        </Typography>
      </div>
    </div>
  );
}
