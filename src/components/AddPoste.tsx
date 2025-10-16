import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Add_Poste } from "./API/Donnees/Poste";
import AuthContext from "./Hooks/Authentification.context";

export default function AddPoste() {
  const [poste, setPoste] = useState("");
  const [desc, setDesc] = useState("");
  const [loader, setLoader] = useState(false);
  const { data, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    const donnee = {
      poste: poste,
      desc_post: desc,
      user_id: data.user.id,
      entreprise_id: data.entreprise.id,
    };

    // TODO: Replace with your API call to add a poste, e.g.:
    Add_Poste(donnee)
      .then((res) => {
        dispatch({ type: "ADD_POSTE", payload: { poste: res } });
      })
      .finally(() => {
        setLoader(false);
      });

    setPoste("");
    setDesc("");
  };

  return (
    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
      placement="bottom-start"
    >
      <PopoverHandler>
        <Button size="sm" className="my-2">
          Ajouter un poste
        </Button>
      </PopoverHandler>
      <PopoverContent>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Poste"
            value={poste}
            onChange={(e) => setPoste(e.target.value)}
          />
          <Textarea
            label="description"
            name="description"
            id=""
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button
            size="sm"
            type="submit"
            className="flex items-center justify-center gap-2"
          >
            {loader && <Spinner className="h-4 w-4" />}
            <Typography variant="small" className="text-[12px] font-semibold">
              Ajouter
            </Typography>
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
