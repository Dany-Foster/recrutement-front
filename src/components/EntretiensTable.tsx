import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CandidatCard from "./CandidatCard";
import { Offres } from "./Hooks/type";
import { useData } from "./Hooks/useData";

const TABLE_HEAD = ["Offre", "Date", "Heure", "Lieu", "Actions"];

const TABLE_ROWS = [
  {
    offre: "Développeur Web",
    date: "2025-06-01",
    heure: "09:00",
    lieu: "Entreprise Vanilla",
  },
  {
    offre: "Chef de projet",
    date: "2025-06-01",
    heure: "09:00",
    lieu: "Entreprise Vanilla",
  },
];

export default function EntretiensTable() {
  const { data } = useData();
  const [entretien, setEntretien] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);
  const [offre, setOffre] = useState("");
  const [selected, setSelectedCandidat] = useState([]);
  const HandleNavigate = () => navigate(`/dashboard/entretien/${entretien}`);
  return (
    <div className="w-full flex justify-center items-start gap-2">
      <Card className="w-1/2  bg-white shadow-md">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray" className="uppercase">
                Liste des entretiens
              </Typography>
              <Typography
                color="gray"
                className="mt-1 text-[12px] lg:text-[14px] font-normal brea"
              >
                Vous pouvez consulter la liste des entretiens, leurs candidats
                et leurs offres d'emploi.
              </Typography>
            </div>
          </div>
          {/** Input recherche et le bouton group */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<CiSearch className="h-5 w-5" />} />
            </div>
          </div>
        </CardHeader>
        <CardBody className="h-[400px] px-0 overflow-scroll lg:overflow-auto">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ offre, date, heure, lieu }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {offre}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {heure}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {lieu}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Détails">
                        <IconButton variant="text" onClick={handleOpen}>
                          <IoIosInformationCircle className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 de 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      <div className="w-1/2 flex flex-col gap-2">
        <Card className="w-full min-h-[400px] bg-white shadow-md">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <Typography
              variant="h5"
              color="blue-gray"
              className="uppercase text-[20px]"
            >
              Planifier un entretien
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-[14px] font-normal"
            >
              Vous pouvez planifier un entretien en remplissant le formulaire
              ci-dessous.
            </Typography>
          </CardHeader>
          <CardBody className="px-4">
            <form action="" className="w-full flex flex-col gap-4">
              <div className="w-full flex items-center gap-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="">Date de l'entretien</label>
                  <Input
                    type="date"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="">Heure</label>
                  <Input
                    type="time"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Lieu</label>
                <Input
                  type="text"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Select
                  id="type"
                  value={offre}
                  label="Offre d'emplois"
                  onChange={(val) => val !== undefined && setOffre(val)}
                >
                  {data.offres.map((donnee: Offres, index: number) => (
                    <Option key={index} value={donnee.id} className="my-2">
                      {donnee.titre}
                    </Option>
                  ))}
                </Select>
              </div>
              <Button onClick={handleOpen}>
                <Typography
                  variant="small"
                  className="text-[14px] font-semibold"
                >
                  Sélectionner un ou des candidats
                </Typography>
              </Button>
              <div className="w-full flex flex-col gap-2">
                <Typography
                  variant="small"
                  className="text-[14px] font-semibold"
                >
                  Liste des candidats sélectionnés pour l'entretiens : 0
                </Typography>
              </div>
              <Button>
                <Typography
                  variant="small"
                  className="text-[14px] font-semibold"
                >
                  Planifier
                </Typography>
              </Button>
            </form>
          </CardBody>
        </Card>
        <PlanificationDialog open={open} handlerOpen={handleOpen} />
      </div>
    </div>
  );
}

interface Candidat {
  id: number;
  nom: string;
  poste: string;
}
export function PlanificationDialog({
  open,
  handlerOpen,
  onSelect,
}: {
  open: boolean;
  handlerOpen: () => void;
  onSelect?: (candidat: Candidat) => void;
}) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const candidats: Candidat[] = [
    { id: 1, nom: "Rakoto Fenitra", poste: "Développeur Web" },
    { id: 2, nom: "Andrianina Lova", poste: "Chef de projet" },
    { id: 3, nom: "Raharinirina Fara", poste: "Designer UI/UX" },
    { id: 4, nom: "Rasolo Tiana", poste: "Data Analyst" },
    { id: 5, nom: "Andrianina Lova", poste: "Chef de projet" },
    { id: 6, nom: "Raharinirina Fara", poste: "Designer UI/UX" },
    { id: 7, nom: "Rasolo Tiana", poste: "Data Analyst" },
  ];

  const filtered = candidats.filter(
    (c) =>
      c.nom.toLowerCase().includes(search.toLowerCase()) ||
      c.poste.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: number) => {
    setSelectedId(id);
    const selectedCandidat = candidats.find((c) => c.id === id);
    if (selectedCandidat && onSelect) onSelect(selectedCandidat);
  };
  return (
    <Dialog open={open} handler={handlerOpen} size="md" className="">
      <DialogBody className="overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography variant="h5" color="blue-gray">
              Selectionner le candidat :
            </Typography>
            <div className="w-full md:w-1/2 relative">
              <CiSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
              <Input
                label="Rechercher..."
                crossOrigin={undefined} // nécessaire pour TS (bug Input)
                color="blue"
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-auto max-h-[400px]">
            <div className="flex flex-col gap-2">
              {filtered.length > 0 ? (
                filtered.map((candidat) => (
                  <div
                    key={candidat.id}
                    onClick={() => handleSelect(candidat.id)}
                    className={`border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedId === candidat.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <CandidatCard key={candidat.id} candidat={candidat} />
                  </div>
                ))
              ) : (
                <Typography variant="small" className="text-[12px] font-medium">
                  Aucun candidat trouvé
                </Typography>
              )}
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div className="w-full flex justify-between">
          <Button variant="outlined" color="red">
            <Typography
              variant="small"
              className="text-[14px] font-semibold"
              onClick={handlerOpen}
            >
              Annuler
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="small"
              className="text-[14px] font-semibold"
              onClick={handlerOpen}
            >
              Planifier
            </Typography>
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
}
