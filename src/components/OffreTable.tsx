/* trunk-ignore-all(prettier) */
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Progress,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Textarea,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";
import { MdOutlineCardTravel } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { AddPoste, InputTag } from ".";
import { formatDate } from "../lib/utils";
import { criteres, Offres, Poste, Sections } from "./Hooks/type";
import { useData } from "./Hooks/useData";
const TABS = [
  {
    label: "Tout",
    value: "T",
  },
  {
    label: "Ouvert",
    value: "O",
  },
  {
    label: "Fermé",
    value: "F",
  },
];

const TABLE_HEAD = [
  "Offres",
  "Poste",
  "Date de clôturation",
  "Créateur",
  "Candidats",
  "Status",
  "Actions",
];

export default function SortableTable({
  actionOpen,
}: {
  actionOpen: () => void;
}) {
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = (offre?: Offres) => {
    if (openDetails) {
      setOpenDetails(false);
      setSelectOffre(null);
    } else {
      setSelectOffre(offre ? offre : null);
      setOpenDetails(true);
    }
  };
  const { data, setSelectOffre } = useData();
  const cloturation = (date: string) => {
    if (date) {
      const dateCloturation = new Date(date);
      const today = new Date();
      if (dateCloturation > today) {
        return "Ouvert";
      } else {
        return "Fermé";
      }
    }
  };
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des offres
            </Typography>
            <Typography
              color="gray"
              className="mt-1 text-[12px] lg:text-[14px] font-normal brea"
            >
              Vous pouvez consulter la liste des offres d'emplois, leurs
              candidatures et leurs candidats.
            </Typography>
          </div>
          <div className="flex items-center justify-around gap-4">
            <AddPoste />
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex items-center gap-3"
                size="sm"
                variant="gradient"
                onClick={actionOpen}
              >
                <MdOutlineCardTravel strokeWidth={2} className="h-4 w-4" />{" "}
                AJouter une offre
              </Button>
            </div>
          </div>
        </div>
        {/** Input recherche et le bouton group */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="T" className="w-full md:w-[650px]">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="text-[8px] md:text-[14px] font-normal "
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<CiSearch className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-0 overflow-scroll lg:overflow-auto">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <LuChevronsUpDown strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="w-full">
            {data.offres.map((donnee: Offres, index: number) => {
              const isLast = index === data.offres.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={donnee.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-1">
                        <Typography
                          variant="small"
                          color="black"
                          className="font-semibold"
                        >
                          {donnee.titre}
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="text-[12px] font-normal"
                        >
                          {donnee.contrat} - <strong>{donnee.temps}</strong>
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {donnee.poste && donnee.poste.poste}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatDate(donnee.date_clot ? donnee.date_clot : "")}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {donnee.user && donnee.user.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      1
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography>
                      {cloturation(donnee.date_clot ? donnee.date_clot : "")}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Modifier l'offre">
                      <IconButton
                        variant="text"
                        onClick={() => handleOpenDetails(donnee)}
                      >
                        <SlOptions className="h-4 w-4" />
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
        <div className="flex items-center gap-2 justify-center p-2 border border-black rounded-md">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 de 10
          </Typography>
        </div>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Précedent
          </Button>
          <Button variant="outlined" size="sm">
            Suivant
          </Button>
        </div>
      </CardFooter>
      <DialogOffre open={openDetails} handleChange={handleOpenDetails} />
    </Card>
  );
}

export function DialogOffre({
  open,
  handleChange,
}: {
  open: boolean;
  handleChange: () => void;
}) {
  const { HandleUpdateOffre } = useData();
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
              Détails de l'offre d'emploi
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Vous pouvez consulter les détails de l'offre d'emploi ici.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          size="sm"
          onClick={handleChange}
          className="!absolute right-2.5 top-2.5"
        >
          <IoIosClose size={25} />
        </IconButton>
      </DialogHeader>
      <DialogBody>
        <TabOffreInfo />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          onClick={() => HandleUpdateOffre(handleChange)}
          className="mr-1"
        >
          <span>Modifier l'offre</span>
        </Button>
        <Button variant="text" color="blue" onClick={handleChange}>
          <span>Fermer</span>
        </Button>
        <Button variant="text" color="red" className="ml-auto">
          Supprimer l'offre
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export function TabOffreInfo() {
  const [activate, setActivate] = useState("Info");
  return (
    <Tabs value={activate} className="w-full">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        <Tab
          value={"Info"}
          onClick={() => setActivate("Info")}
          className={activate === activate ? "text-gray-900" : ""}
        >
          Informations
        </Tab>
        <Tab
          value={"Modif"}
          onClick={() => setActivate("Modif")}
          className={activate === activate ? "text-gray-900" : ""}
        >
          Modifications
        </Tab>
        <Tab
          value={"Cands"}
          onClick={() => setActivate("Cands")}
          className={activate === activate ? "text-gray-900" : ""}
        >
          Candidats postulé
        </Tab>
        {/* <Tab value={"Stats"} onClick={() => setActivate("Stats")} className={activate === activate ? "text-gray-900" : ""}>Analyses</Tab> */}
      </TabsHeader>
      <TabsBody className="h-[500px]">
        <TabPanel
          value={"Info"}
          className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 "
        >
          <InfoOffre />
        </TabPanel>
        <TabPanel
          value={"Modif"}
          className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 p-0"
        >
          <ModifOffre />
        </TabPanel>
        <TabPanel
          value={"Cands"}
          className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 p-0"
        >
          <CandidatPostule />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

function InfoOffre() {
  const [Exp, setExp] = useState<string[]>([]);
  const [Comp, setComp] = useState<string[]>([]);
  const [Lang, setLang] = useState<string[]>([]);
  const [Form, setForm] = useState<string[]>([]);
  const { selectOffre } = useData();

  useEffect(() => {
    selectOffre?.criteres &&
      selectOffre.criteres.forEach((crt: criteres) => {
        const section: Sections = crt.section;
        switch (section.section) {
          case "Expériences":
            setExp(crt.critere);
            break;
          case "Compétences":
            setComp(crt.critere);
            break;
          case "Langues":
            setLang(crt.critere);
            break;
          case "Formations":
            setForm(crt.critere);
            break;
          default:
            break;
        }
      });
  }, [selectOffre]);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-2">
      <Typography
        variant="h2"
        color="blue-gray"
        className="text-[25px] h-[18px] font-bold uppercase "
      >
        {selectOffre?.titre}
      </Typography>
      <div className="w-full flex items-start justify-arround gap-2 ml-4">
        <Typography
          variant="small"
          color="black"
          className="text-[14px] mt-2 flex items-center justify-center gap-2"
        >
          <strong>Type de contrat</strong> - {selectOffre?.contrat} |
          <Chip value={selectOffre?.temps} size="sm" />
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="text-[14px] mt-2 flex items-center  justify-between gap-2"
        >
          <span className="text-[14px] font-bold text-blue-gray-900">
            Localisation :
          </span>{" "}
          Madagascar, Antananarivo
          <Typography
            variant="small"
            color="black"
            className="text-[14px] font-bold text-black"
          >
            Date Limite:{" "}
          </Typography>
          <span className="text-[12px] font-semibold text-blue-gray-600">
            {selectOffre?.date_clot}
          </span>
          {selectOffre?.date_pub && (
            <div className="">
              <Typography
                variant="small"
                color="black"
                className="text-[14px] font-bold text-black"
              >
                Date de publication:
              </Typography>
              <span className="text-[12px] font-semibold text-blue-gray-600">
                {selectOffre?.date_pub}
              </span>
            </div>
          )}
        </Typography>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start gap-4 p-4 border-t border-gray-200">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Description de l'offre
          </Typography>
        </div>
        <Typography
          variant="small"
          color="black"
          className="text-[14px] text-justify ml-4"
        >
          {selectOffre?.desc_ofr}
        </Typography>

        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Compétences requises
          </Typography>
        </div>
        <div className="w-full flex ml-2 flex-wrap gap-2">
          {Comp.map((crt) => (
            <Chip key={crt} value={crt} size="sm" />
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Expériences requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          {Exp.map((crt) => (
            <Typography
              key={crt}
              variant="small"
              color="gray"
              className="text-[14px] ml-2"
            >
              {crt}
            </Typography>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Formations requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          {Form.map((crt) => (
            <Typography
              key={crt}
              variant="small"
              color="gray"
              className="text-[14px] ml-2"
            >
              {crt}
            </Typography>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Langues requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          {Lang.map((crt) => (
            <Typography
              key={crt}
              variant="small"
              color="gray"
              className="text-[14px] ml-2"
            >
              {crt}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}

function ModifOffre() {
  const [Exp, setExp] = useState<string[]>([]);
  const [Comp, setComp] = useState<string[]>([]);
  const [Lang, setLang] = useState<string[]>([]);
  const [Form, setForm] = useState<string[]>([]);
  const { data, selectOffre, setSelectOffre } = useData();

  useEffect(() => {
    if (selectOffre) {
      selectOffre.criteres &&
        selectOffre.criteres.forEach((crt: criteres) => {
          const section: Sections = crt.section;
          switch (section.section) {
            case "Expériences":
              setExp(crt.critere);
              break;
            case "Compétences":
              setComp(crt.critere);
              break;
            case "Langues":
              setLang(crt.critere);
              break;
            case "Formations":
              setForm(crt.critere);
              break;
            default:
              break;
          }
        });
    }
  }, []);

  useEffect(() => {
    const critereId =
      selectOffre?.criteres && selectOffre.criteres.map((crt) => crt.id);
    const UpdateCriteres = [
      {
        section: { id: "1", section: "Expériences" },
        id: critereId?.[0],
        critere: Exp,
      },
      {
        section: { id: "2", section: "Formations" },
        id: critereId?.[2],
        critere: Form,
      },
      {
        section: { id: "3", section: "Compétences" },
        id: critereId?.[1],
        critere: Comp,
      },
      {
        section: { id: "4", section: "Langues" },
        id: critereId?.[3],
        critere: Lang,
      },
    ];

    if (selectOffre) {
      setSelectOffre({ ...selectOffre, criteres: UpdateCriteres });
    }
  }, [Exp, Comp, Lang, Form]);

  const handleChangePoste = useCallback(
    (id: string) => {
      const poste = data.poste.find((poste) => poste.id === id);
      if (poste) {
        setSelectOffre({ ...selectOffre, poste: poste });
      }
    },
    [data.poste, selectOffre]
  );

  return (
    <form action="" className=" border-gray-200 pt-4 max-h-[70vh] pr-2">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
        <div className="w-full flex flex-col  gap-2 mt-4 md:col-span-2">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 text-[14px] font-semibold uppercase"
          >
            Modification de l'offre d'emploi
          </Typography>
          <Input
            type="text"
            label="Titre de l'offre"
            id="titre"
            value={selectOffre !== null ? selectOffre.titre : ""}
            onChange={(e) =>
              setSelectOffre({ ...selectOffre, titre: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full">
          <Select
            id="type"
            value={selectOffre !== null ? selectOffre.contrat : ""}
            label="Type de contrat"
            onChange={(val) =>
              val !== undefined &&
              setSelectOffre({ ...selectOffre, contrat: val })
            }
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
              value={selectOffre !== null ? selectOffre.date_clot : ""}
              onChange={(e) =>
                setSelectOffre({ ...selectOffre, date_clot: e.target.value })
              }
              required
            />
          </div>
          <div className="w-1/2 flex items-center gap-2 relative">
            <Input
              type="number"
              label="Année Expérience"
              value={selectOffre !== null ? selectOffre.Annee_Exp : ""}
              onChange={(e) =>
                setSelectOffre({ ...selectOffre, Annee_Exp: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="w-full">
          <Select
            id="type"
            value={
              selectOffre !== null && selectOffre.poste
                ? selectOffre.poste.id
                : ""
            }
            label="Poste disponible"
            onChange={(val) =>
              val !== undefined && selectOffre?.poste && handleChangePoste(val)
            }
          >
            {data.poste.map((poste: Poste, index: number) => (
              <Option key={index} value={poste.id}>
                {poste.poste}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full">
          <Select
            id="timework"
            label="Type de travail"
            value={selectOffre !== null ? selectOffre.temps : ""}
            onChange={(val) =>
              val !== undefined &&
              setSelectOffre({ ...selectOffre, temps: val })
            }
          >
            <Option value="default" disabled>
              -- Sélectionner --
            </Option>
            <Option value="Temps partiel">Partiel</Option>
            <Option value="Temps plein">Temps plein</Option>
            <Option value="Freelance">Freelance</Option>
          </Select>
        </div>
        <div className="w-full md:col-span-2">
          <Textarea
            label="Description de l'offre"
            value={selectOffre !== null ? selectOffre.desc_ofr : ""}
            onChange={(e) =>
              setSelectOffre({ ...selectOffre, desc_ofr: e.target.value })
            }
            className=""
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
            critere={Exp}
            setCritere={setExp}
          />
          <InputTag
            placeholder="Saisir les critères de compétence ici..."
            critere={Comp}
            setCritere={setComp}
          />
          <InputTag
            placeholder="Saisir les critères de formations ici..."
            critere={Form}
            setCritere={setForm}
          />
          <InputTag
            placeholder="Saisir les critères de langues ici..."
            critere={Lang}
            setCritere={setLang}
          />
        </div>
      </div>
    </form>
  );
}

function CandidatPostule() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-4 py-1 mt-4">
      <Typography
        variant="h2"
        color="blue-gray"
        className="text-[25px] h-[18px] font-bold uppercase "
      >
        Liste des candidats postulés
      </Typography>
      <Typography
        variant="small"
        color="gray"
        className="text-[14px] text-justify ml-4"
      >
        Vous pouvez consulter la liste des candidats ayant postulé à cette offre
        d'emploi ici.
      </Typography>
      <div className="w-full h-full flex flex-col gap-2">
        <Card
          color="transparent"
          shadow={true}
          className="w-full h-[100px] flex items-center border border-gray-200"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="w-full h-full px-4 pb-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                size="lg"
                alt="cand"
                className=" object-cover"
              />
              <div className="flex flex-col gap-1">
                <div className=" flex flex-col gap-1">
                  <Typography variant="h5" color="blue-gray">
                    Jean Dupont
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-[12px] w-[100px] font-semibold flex items-center gap-2"
                  >
                    Status:{" "}
                    <Chip
                      value="En attente"
                      color="orange"
                      size="sm"
                      className="text-[10px] text-white"
                    />
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-[10px]"
                  >
                    Postulé le: 2024-10-15 - il y a 5 jours
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <Typography variant="small" color="gray" className="text-[12px]">
                Score:{" "}
                <span className="font-bold text-blue-gray-900">50/100</span>
              </Typography>
              <Progress value={50} size="sm" className="" />
              <Button size="sm" className="w-full">
                Voir le profil
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

// function Statistiques() {
//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-4 py-1 mt-4">
//       <Typography
//         variant="h2"
//         color="blue-gray"
//         className="text-[25px] h-[18px] font-bold uppercase "
//       >
//         Statistiques de l'offre d'emploi
//       </Typography>
//       <Typography
//         variant="small"
//         color="gray"
//         className="text-[14px] text-justify ml-4"
//       >
//         Vous pouvez consulter les statistiques de cette offre d'emploi ici.
//       </Typography>
//       <div className="w-full h-full flex flex-col gap-2">
//         <Card
//           color="transparent"
//           shadow={true}
//           className="w-full h-[500px] flex items-center border border-gray-200"
//         >
//           <CardHeader
//             color="transparent"
//             floated={false}
//             shadow={false}
//             className="w-full h-full px-4 pb-4 flex items-center justify-between gap-4"
//           >
//             <div className="flex items-center gap-4">
//               <div className="flex flex-col gap-1">
//                 <div className=" flex flex-col gap-1">
//                   <Typography variant="h5" color="blue-gray">
//                     Nombre de candidatures reçues
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="gray"
//                     className="text-[10px]"
//                   >
//                     Candidatures ce mois-ci:{" "}
//                     <span className="font-bold text-blue-gray-900">30</span>
//                   </Typography>
//                 </div>
//               </div>
//             </div>
//           </CardHeader>
//         </Card>
//       </div>
//     </div>
//   );
// }
