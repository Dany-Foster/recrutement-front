import { Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function SectionPage() {
  const [section, setSection] = useState("");

  return (
    <div className="w-full px-4 mt-2">
      <div className="w-full mb-4">
        <Typography variant="h3" className="text-[20px] font-bold uppercase">
          Section d'un CV
        </Typography>
        <Typography variant="small" color="blue-gray" className="pl-2">
          Vous pouvez consulter et ajouter section d'un CV
        </Typography>
        <form action="">
          <Input type="text" />
        </form>
      </div>
    </div>
  );
}
