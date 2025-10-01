/* trunk-ignore-all(prettier) */
import { CiSearch } from "react-icons/ci";
import { LuChevronsUpDown } from "react-icons/lu";
import { SlOptions } from "react-icons/sl";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
  ChipProps,
  Dialog,
  DialogBody,
  TabsBody,
  TabPanel,
  DialogFooter,
  Select,
  Option,
  Textarea,
  Avatar,
  Progress,
} from "@material-tailwind/react";
import { MdOutlineCardTravel } from "react-icons/md";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import { DialogHeader } from "@material-tailwind/react";
import { InputTag } from ".";
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
 
const TABLE_HEAD = ["Offres", "Poste", "Localisation", "Status", "Candidats", "Actions"];
 
const TABLE_ROWS = [
  {
    name: "Développeur Javascript",
    contrat: "CDI",
    temps: "Temps plein",
    email: "laurent@creative-tim.com",
    job: "Développeur Frontend",
    online: "Cloturé",
    bnCandidat: "45",
    localisation: "Paris, France",
    bg: "red"
  },
  {
    name: "Recherche de designer UI/UX",
    contrat: "CDI",
    temps: "Temps plein",
    email: "michael@creative-tim.com",
    job: "Créateur Site Web",
    online: "Ouvert",
    bnCandidat: "24",
    localisation: "Lyon, France",
    bg: "green"
  },
  {
    name: "Developeur fullstack",
    contrat: "CDI",
    temps: "Temps plein",
    email: "RichnoCrop@creative-tim.com",
    job: "Ingénieur Logiciel",
    online: "Cloturé",
    bnCandidat: "21",
    localisation: "Marseille, France",
    bg: "red"
  },
];
 
export default function SortableTable({actionOpen}: {actionOpen: () => void}) {
  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => setOpenDetails(!openDetails);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des offres
            </Typography>
            <Typography color="gray" className="mt-1 text-[12px] lg:text-[14px] font-normal brea">
              Vous pouvez consulter la liste des offres d'emplois, leurs candidatures et
              leurs candidats.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm" variant="gradient" onClick={actionOpen}>
              <MdOutlineCardTravel strokeWidth={2} className="h-4 w-4" /> AJouter une offre
            </Button>
          </div>
        </div>
        {/** Input recherche et le bouton group */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="T" className="w-full md:w-[650px]">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} className="text-[8px] md:text-[14px] font-normal ">
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<CiSearch className="h-5 w-5" />}
            />
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
          <tbody>
            {TABLE_ROWS.map(
              ({  name , job, online, bnCandidat, localisation, bg, contrat, temps }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography variant="small" color="gray" className="text-[12px] font-normal">
                            {contrat} - {temps}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
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
                          {localisation}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online}
                          color={bg as ChipProps["color"]}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal "
                      >
                        {bnCandidat}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Modifier l'offre">
                        <IconButton variant="text" onClick={handleOpenDetails}>
                          <SlOptions className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
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
      <DialogOffre open={openDetails} handleChange={handleOpenDetails}/>
    </Card>
  );
}


export function DialogOffre({open, handleChange}: {open: boolean, handleChange: () => void}) {
  return (
    <Dialog size="lg" open={open} handler={handleChange}>
      <DialogHeader className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="w-full min-h-[35px] flex items-center gap-2">
            <IoBagRemove size={35}/>
            <Typography variant="h5" className="text-[18px] h-[18px] font-bold uppercase ">
              Détails de l'offre d'emploi
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Vous pouvez consulter les détails de l'offre d'emploi ici.
          </Typography>
        </div>
        <IconButton variant="text" color="blue-gray" size="sm" onClick={handleChange} className="!absolute right-2.5 top-2.5">
          <IoIosClose size={25}/>
        </IconButton>
      </DialogHeader>
      <DialogBody>
        <TabOffreInfo/>
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" onClick={handleChange} className="mr-1">
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
  )
}


export function TabOffreInfo(){
  const [activate, setActivate] = useState("Info")
  return (
    <Tabs value={activate} className="w-full">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        <Tab value={"Info"} onClick={() => setActivate("Info")} className={activate === activate ? "text-gray-900" : ""}>Informations</Tab>
        <Tab value={"Modif"} onClick={() => setActivate("Modif")} className={activate === activate ? "text-gray-900" : ""}>Modifications</Tab>
        <Tab value={"Cands"} onClick={() => setActivate("Cands")} className={activate === activate ? "text-gray-900" : ""}>Candidats postulé</Tab>
        {/* <Tab value={"Stats"} onClick={() => setActivate("Stats")} className={activate === activate ? "text-gray-900" : ""}>Analyses</Tab> */}
      </TabsHeader>
      <TabsBody className="h-[500px]">
        <TabPanel value={"Info"} className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 ">
          <InfoOffre/>
        </TabPanel>
        <TabPanel value={"Modif"} className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 p-0">
          <ModifOffre/>
        </TabPanel>
        <TabPanel value={"Cands"} className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 p-0">
          <CandidatPostule/>
        </TabPanel>
        {/* <TabPanel value={"Stats"} className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 p-0">
          <Statistiques/>
        </TabPanel> */}
      </TabsBody>
    </Tabs>
  )
}

function InfoOffre() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-2">
      <Typography variant="h2" color="blue-gray" className="text-[25px] h-[18px] font-bold uppercase ">
        Titre de l'offre d'emploi
      </Typography>
      <div className="w-full flex items-start justify-arround gap-2 ml-4">
        <Typography variant="small" color="gray" className="text-[14px] mt-2 flex items-center justify-center gap-2">
          Type de contrat - CDD | <Chip value="Temps plein" size="sm"/>
        </Typography>
        <Typography variant="small" color="gray" className="text-[14px] mt-2 flex items-center  justify-between gap-2">
          <span className="text-[14px] font-bold text-blue-gray-900">Localisation :</span> Paris, France
          <span>Date Limite: </span> <span className="text-[14px] font-bold text-blue-gray-900">2025-12-31</span>
        </Typography>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start gap-4 p-4 border-t border-gray-200">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography variant="small" color="blue-gray" className="text-[14px] font-bold uppercase ">
            Description de l'offre
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="text-[14px] text-justify ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography variant="small" color="blue-gray" className="text-[14px] font-bold uppercase ">
            Compétences requises
          </Typography>
        </div>
        <div className="w-full flex ml-2 flex-wrap gap-2">
          <Chip value="JavaScript" size="sm" />
          <Chip value="React" size="sm" />
          <Chip value="Node.js" size="sm" />
          <Chip value="CSS" size="sm" />
          <Chip value="HTML" size="sm" />
          <Chip value="SQL" size="sm" />
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography variant="small" color="blue-gray" className="text-[14px] font-bold uppercase ">
            Expériences requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Minimum 3 ans d'expérience dans le domaine.
          </Typography>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Expérience avec les frameworks modernes (React, Angular, Vue.js).
          </Typography>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Connaissance des bases de données relationnelles et NoSQL.
          </Typography>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Expérience en gestion de projets Agile/Scrum.
          </Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography variant="small" color="blue-gray" className="text-[14px] font-bold uppercase ">
            Formations requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Diplôme en informatique, en génie logiciel ou dans un domaine connexe.
          </Typography>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Expérience en gestion de projets Agile/Scrum.
          </Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography variant="small" color="blue-gray" className="text-[14px] font-bold uppercase ">
            Langues requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Maîtrise du français et de l'anglais, à l'oral comme à l'écrit.
          </Typography>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            La connaissance d'autres langues est un plus.
          </Typography>
        </div>
      </div>
    </div>
  )
}

function ModifOffre() {
  const [contrat, setContrat] = useState("CDD");
  const [typeTr, setTypeTr] = useState("TP");
  const [poste, setPoste] = useState("1");
  const [titre, setTitre] = useState("Développeur React");
  const [lieu, setLieu] = useState("Paris, France");
  const [date_limite, setDate_limite] = useState("2025-12-31");
  const [Annee, setAnnee] = useState("5");
  const [description, setDescription] = useState(" Nous recherchons un développeur React talentueux pour rejoindre notre équipe dynamique. Le candidat idéal aura une solide expérience en développement front-end, une passion pour la création d'interfaces utilisateur intuitives et une connaissance approfondie de React et de ses écosystèmes.");

  const [critereExp, setCritereExp] = useState<string[]>([
    "Bonne maitrise de JavaScript", "Expérience avec React", "Connaissance des bases de données SQL"
  ]);
  const [critereComp, setCritereComp] = useState<string[]>([
    "Travail en équipe", "Résolution de problèmes", "Communication efficace"
  ]);
  const [critereForm, setCritereForm] = useState<string[]>([
    "Licence en informatique", "Master en génie logiciel"
  ]);
  const [critereLang, setCritereLang] = useState<string[]>([
    "Français (courant)", "Anglais (professionnel)"
  ]);
  const [entreprise] = useState({
    nom: "Tech Solutions",
    adresse: "123 Rue de l'Innovation, Paris",
    email: "V7i3d@example.com",
    contact: "+33 1 23 45 67 89",
  });
  return (
    <form action="" className=" border-gray-200 pt-4 max-h-[70vh] pr-2">
      <Typography variant="h1" color="blue-gray" className="mb-2 text-[16px] font-bold uppercase">Informations de l'entreprise</Typography>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
        {/* Entreprise */}
        <div className="w-full">
          <Input type="text" value={entreprise.nom} disabled />
        </div>
        <div className="w-full">
          <Input type="text"  value={entreprise.adresse} disabled />
        </div>
        <div className="w-full">
          <Input type="text"  value={entreprise.email} disabled />
        </div>
        <div className="w-full">
          <Input type="text" value={entreprise.contact} disabled />
        </div>
        <div className="w-full flex flex-col  gap-2 mt-4 md:col-span-2">
          <Typography variant="h6" color="blue-gray" className="mb-2 text-[14px] font-semibold uppercase">Création de l'offre d'emploi</Typography>
          <Input type="text" label="Titre de l'offre" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} required />
        </div>
        <div className="w-full">
          <Select id="type" value={contrat} label="Type de contrat" onChange={(val) => val !== undefined && setContrat(val)}>
            <Option value="default" disabled>-- Sélectionner --</Option>
            <Option value="CDI">CDI</Option>
            <Option value="CDD">CDD</Option>
            <Option value="Stage">Stage</Option>
            <Option value="Alternance">Alternance</Option>
          </Select>
        </div>
        <div className="w-full">
          <Input type="text" label="Lieu de travail" value={lieu} onChange={(e) => setLieu(e.target.value)} required />
        </div>
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <Input type="date" id="deadline" label="Date limite de candidature" value={date_limite} onChange={(e) => setDate_limite(e.target.value)}  required />
          </div>
          <div className="w-1/2 flex items-center gap-2 relative">
            <Input type="number" label="Année Expérience" value={Annee} onChange={(e) => setAnnee(e.target.value)} required />
          </div>
        </div>
        <div className="w-full">
          <Select id="type" value={poste} label="Poste disponible" onChange={(val) => val !== undefined && setPoste(val)}>
            <Option value="default" disabled>-- Sélectionner --</Option>
            <Option value="1">Développeur</Option>
            <Option value="2">Manager professionnel</Option>
            <Option value="3">Stage en administrateur</Option>
            <Button size="sm" className="my-2">Ajouter</Button>
          </Select>
        </div>
        <div className="w-full">
          <Select id="timework" label="Type de travail" value={typeTr} onChange={(val) => val !== undefined && setTypeTr(val)}>
            <Option value="default" disabled>-- Sélectionner --</Option>
            <Option value="P">Partiel</Option>
            <Option value="TP">Temps plein</Option>
          </Select>
        </div>
        <div className="w-full md:col-span-2">
          <Textarea label="Description de l'offre" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
      </div>
      <div className="w-full flex flex-col  gap-2 mt-4">
        <Typography variant="h1" color="blue-gray" className="text-[16px] font-semibold uppercase">Critères de recherche</Typography>
        <div className="flex flex-col ">
          <InputTag placeholder="Saisir les critères d'expérience ici..."  critere={critereExp} setCritere={setCritereExp}/>
          <InputTag placeholder="Saisir les critères de compétence ici..." critere={critereComp} setCritere={setCritereComp}/>
          <InputTag placeholder="Saisir les critères de formations ici..." critere={critereForm} setCritere={setCritereForm}/>
          <InputTag placeholder="Saisir les critères de langues ici..." critere={critereLang} setCritere={setCritereLang}/>
        </div>
      </div>
    </form>
  )

}

function CandidatPostule() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-4 py-1 mt-4">
      <Typography variant="h2" color="blue-gray" className="text-[25px] h-[18px] font-bold uppercase ">
        Liste des candidats postulés
      </Typography>
      <Typography variant="small" color="gray" className="text-[14px] text-justify ml-4">
        Vous pouvez consulter la liste des candidats ayant postulé à cette offre d'emploi ici.
      </Typography>
      <div className="w-full h-full flex flex-col gap-2">
        <Card color="transparent" shadow={true} className="w-full h-[100px] flex items-center border border-gray-200">
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
                  <Typography variant="small" color="gray" className="text-[12px] w-[100px] font-semibold flex items-center gap-2">
                    Status: <Chip value="En attente" color="orange" size="sm" className="text-[10px] text-white"/>
                  </Typography>
                  <Typography variant="small" color="gray" className="text-[10px]">
                    Postulé le: 2024-10-15 - il y a 5 jours
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <Typography variant="small" color="gray" className="text-[12px]">
                Score: <span className="font-bold text-blue-gray-900">50/100</span>
              </Typography>
              <Progress value={50} size="sm" className=""/>
              <Button size="sm" className="w-full">Voir le profil</Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

function Statistiques(){
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-4 py-1 mt-4">
      <Typography variant="h2" color="blue-gray" className="text-[25px] h-[18px] font-bold uppercase ">
        Statistiques de l'offre d'emploi
      </Typography>
      <Typography variant="small" color="gray" className="text-[14px] text-justify ml-4">
        Vous pouvez consulter les statistiques de cette offre d'emploi ici.
      </Typography>
      <div className="w-full h-full flex flex-col gap-2">
        <Card color="transparent" shadow={true} className="w-full h-[500px] flex items-center border border-gray-200">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="w-full h-full px-4 pb-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <div className=" flex flex-col gap-1">
                  <Typography variant="h5" color="blue-gray">
                    Nombre de candidatures reçues
                  </Typography>
                  <Typography variant="small" color="gray" className="text-[10px]">
                    Candidatures ce mois-ci: <span className="font-bold text-blue-gray-900">30</span>
                  </Typography>
                </div>

              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
