import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import AddUtilisateur from "../Utilisateur/AddUtilisateur";
import TableUtilisateur from "../Utilisateur/TableUtilisateur";

export default function UtilisateurPage() {
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen(!open);
  return (
    <div className="w-full px-4 mt-2">
      <div className="w-full mb-4">
        <Typography variant="h3" className="text-[20px] font-bold uppercase">
          liste des utilisateurs
        </Typography>
        <Typography variant="small" color="blue-gray" className="pl-2">
          Vous pouvez consulter et ajouter un utilisateur
        </Typography>
      </div>
      <TableUtilisateur actionOpen={handleChange} />
      <AddUtilisateur open={open} handleChange={handleChange} />
    </div>
  );
}
