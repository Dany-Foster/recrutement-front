import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Select,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import { InputTag } from "..";
import { CreateOffre } from "../API/Donnees/Offres";
import AuthContext from "../Hooks/Authentification.context";
import { Poste } from "../Hooks/type";

export default function AddOffre({
  open,
  handleChange,
}: {
  open: boolean;
  handleChange: () => void;
}) {
  const [contrat, setContrat] = useState("default");
  const [typeTr, setTypeTr] = useState("");
  const [poste, setPoste] = useState("");
  const [titre, setTitre] = useState("");
  const [date_limite, setDate_limite] = useState("");
  const [description, setDescription] = useState("");
  const [Annee, setAnnee] = useState("");
  const [loader, setLoader] = useState(false);

  const [critereExp, setCritereExp] = useState<string[]>([]);
  const [critereComp, setCritereComp] = useState<string[]>([]);
  const [critereForm, setCritereForm] = useState<string[]>([]);
  const [critereLang, setCritereLang] = useState<string[]>([]);

  const { data, dispatch } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    const Section = [
      { section_id: 1, critere: critereExp },
      { section_id: 3, critere: critereComp },
      { section_id: 2, critere: critereForm },
      { section_id: 4, critere: critereLang },
    ];
    const Offre = {
      titre: titre,
      desc_ofr: description,
      date_clot: date_limite,
      temps_Tr: typeTr,
      Annee_Exp: Annee,
      contrat: contrat,
      critere: Section,
      entreprise_id: data.entreprise && data.entreprise.id,
      poste_id: poste,
      user_id: data.user && data.user.id,
    };
    CreateOffre(Offre)
      .then((res) => {
        dispatch({ type: "ADD_OFFRE", payload: { offre: res ? res : {} } });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
        handleChange();
      });
  };

  return (
    <Dialog size="lg" open={open} handler={handleChange}>
      <DialogHeader className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="w-full min-h-[35px] flex items-center gap-2">
            <IoBagRemove size={35} />
            <Typography
              variant="h5"
              className="text-[18px] h-[18px] font-bold uppercase "
            >
              Ajouter une offre d'emploi
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Cette fenêtre vous permet d'ajouter une nouvelle offre d'emploi.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          size="sm"
          onClick={handleChange}
          className="!absolute right-2.5 top-2.5"
        >
          <IoIosClose className="h-5 w-5" />
        </IconButton>
      </DialogHeader>
      <form action="" onSubmit={handleSubmit}>
        <DialogBody className="space-y-4 overflow-hidden">
          <div className="overflow-auto border-t border-gray-200 pt-2 max-h-[70vh] pr-2">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
              <div className="w-full flex flex-col  gap-2 mt-4 md:col-span-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 text-[14px] font-semibold uppercase"
                >
                  Création de l'offre d'emploi
                </Typography>
                <Input
                  type="text"
                  label="Titre de l'offre"
                  id="titre"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Select
                  id="type"
                  value={contrat}
                  label="Type de contrat"
                  onChange={(val) => val !== undefined && setContrat(val)}
                >
                  <Option value="default" disabled>
                    -- Sélectionner --
                  </Option>
                  <Option value="CDI">CDI</Option>
                  <Option value="CDD">CDD</Option>
                  <Option value="Stage">Stage</Option>
                  <Option value="Alternance">Alternance</Option>
                </Select>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-1/2">
                  <Input
                    type="date"
                    id="deadline"
                    label="Date limite de candidature"
                    value={date_limite}
                    onChange={(e) => setDate_limite(e.target.value)}
                    required
                  />
                </div>
                <div className="w-1/2 flex items-center gap-2 relative">
                  <Input
                    type="number"
                    value={Annee}
                    onChange={(e) => setAnnee(e.target.value)}
                    label="Année Expérience"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex gap-2">
                <Select
                  id="type"
                  value={poste}
                  label="Poste disponible"
                  onChange={(val) => val !== undefined && setPoste(val)}
                >
                  {data.poste.map((poste: Poste, index: number) => (
                    <Option key={index} value={String(poste.id)}>
                      {poste.poste}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="w-full">
                <Select
                  id="timework"
                  label="Type de travail"
                  value={typeTr}
                  onChange={(val) => val !== undefined && setTypeTr(val)}
                >
                  <Option value="Temps partiel">Partiel</Option>
                  <Option value="Temps plein">Temps plein</Option>
                  <Option value="Freelance">Freelance</Option>
                </Select>
              </div>
              <div className="w-full md:col-span-2">
                <Textarea
                  label="Description de l'offre"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-col  gap-2 mt-4">
              <Typography
                variant="h1"
                color="blue-gray"
                className="text-[16px] font-semibold uppercase"
              >
                Critères de recherche
              </Typography>
              <div className="flex flex-col ">
                <InputTag
                  placeholder="Saisir les critères d'expérience ici..."
                  critere={critereExp}
                  setCritere={setCritereExp}
                />
                <InputTag
                  placeholder="Saisir les critères de compétence ici..."
                  critere={critereComp}
                  setCritere={setCritereComp}
                />
                <InputTag
                  placeholder="Saisir les critères de formations ici..."
                  critere={critereForm}
                  setCritere={setCritereForm}
                />
                <InputTag
                  placeholder="Saisir les critères de langues ici..."
                  critere={critereLang}
                  setCritere={setCritereLang}
                />
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            className="mr-1 flex items-center justify-center gap-2"
            type="submit"
          >
            {loader && <Spinner className="h-4 w-4" />}
            <Typography variant="small" className="text-[12px] font-semibold">
              Ajouter
            </Typography>
          </Button>
          <Button variant="text" color="red" onClick={handleChange}>
            <span>Annuler</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
}
