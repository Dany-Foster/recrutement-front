import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  ChipProps,
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
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { FormEvent, useContext, useState } from "react";
import Chart from "react-apexcharts";
import { IoIosClose } from "react-icons/io";
import { IoClose, IoPersonAddSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { SlOptions } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { DropZone } from "..";
import { CreateCandidat } from "../API/Donnees/Candidats";
import AuthContext from "../Hooks/Authentification.context";
import { Offres } from "../Hooks/type";

const TABS = [
  {
    label: "Tout",
    value: "All",
  },
  {
    label: "En cours",
    value: "EC",
  },
  {
    label: "En entretien",
    value: "ET",
  },
  {
    label: "Rejeté",
    value: "R",
  },
  {
    label: "Reçue",
    value: "rc",
  },
];
const TABLE_HEAD = ["Rang", "Candidat", "Poste", "Status", "Score", ""];
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: "En cours",
    date: "55%",
    bg: "blue",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: "Entretien",
    date: "70%",
    bg: "yellow",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: "Reçu",
    date: "75%",
    bg: "green",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: "Rejeté",
    date: "30%",
    bg: "red",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: "En cours",
    date: "50%",
    bg: "blue",
  },
];
export default function CandidaturePages() {
  const navigate = useNavigate();
  const HandleOpen = () => navigate("/dashboard/analyses");

  const [ShowDetail, setShowDetail] = useState(false);
  const handleShowDetail = () => setShowDetail(!ShowDetail);

  return (
    <div className="mt-4 mx-2">
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Liste des candidats
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Voir les informations des candidats, leurs candidatures et leurs
                offres d'emploi
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                onClick={HandleOpen}
                className="flex items-center gap-3"
                size="sm"
                variant="gradient"
              >
                <IoPersonAddSharp strokeWidth={2} className="h-4 w-4" /> Evaluer
                un candidat
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="All" className="w-full md:w-[650px]">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    className="text-[8px] md:text-[14px] font-normal"
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input label="Search" icon={<LuSearch className="h-5 w-5" />} />
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0 overflow-scroll lg:overflow-auto">
          <table className=" w-full min-w-max table-auto text-left ">
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
              {TABLE_ROWS.map(
                ({ img, name, email, job, org, online, date, bg }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {index + 1}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <Avatar src={img} alt={name} size="sm" /> */}
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {org}
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
                          className="font-bold mb-1 text-center"
                        >
                          {date}
                        </Typography>
                        <Progress value={50} color="gray" />
                      </td>
                      <td className={classes}>
                        <Tooltip content="Détails du candidat">
                          <IconButton variant="text" onClick={handleShowDetail}>
                            <SlOptions className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-medium">
            Page 1 sur 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Précédent
            </Button>
            <Button variant="outlined" size="sm">
              Suivant
            </Button>
          </div>
        </CardFooter>
      </Card>
      <ModalCardCandidat open={ShowDetail} handleOpen={handleShowDetail} />
    </div>
  );
}

export function AddCandidat({
  open,
  HandleOpen,
}: {
  open: boolean;
  HandleOpen: () => void;
}) {
  const { data } = useContext(AuthContext);
  const [file, setFile] = useState<File | null>(null);
  const [offre, setOffre] = useState("");

  // Appel au données dans le contexte
  const handleAddCandidat = (e: FormEvent) => {
    e.preventDefault();
    const user = data.user.id;

    const Candidat = {
      file: file,
      user: user,
      offre_id: offre,
    };
    CreateCandidat(Candidat);
  };

  return (
    <Dialog size="sm" open={open} handler={HandleOpen} className="p-4">
      <DialogHeader className="relative m-0 block">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-[20px] font-bold uppercase"
        >
          Ajouter un candidat
        </Typography>
        <Typography className="mt-1 font-normal font-gray-400">
          Ajouter un candadit à partir de son CV
        </Typography>
        <IconButton
          size="md"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={HandleOpen}
        >
          <IoClose className="h-4 w-4" />
        </IconButton>
      </DialogHeader>
      <DialogBody className="space-y-4">
        <form onSubmit={handleAddCandidat} className="flex flex-col gap-4">
          <Select
            id="type"
            value={offre}
            label="Offre disponibles"
            onChange={(val) => val !== undefined && setOffre(val)}
          >
            {data.offres.map((donnee: Offres, index: number) => (
              <Option key={index} value={donnee.id}>
                {donnee.titre}
              </Option>
            ))}
          </Select>
          <div className="flex flex-col gap-2">
            <DropZone
              onFiles={(files) => setFile(files)}
              fichier={file}
              accept=".pdf"
              multiple={false}
            />
          </div>
          <Button type="submit" variant="gradient" color="green">
            Ajouter la candidature
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  );
}

export function ModalCardCandidat({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  return (
    <Dialog size="lg" open={open} handler={handleOpen}>
      <DialogHeader className="relative">
        <Typography variant="h5" color="blue-gray" className="">
          Détails du Candidat
        </Typography>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="!absolute top-2.5 right-2.5"
        >
          <IoIosClose className="h-5 w-5" />
        </IconButton>
      </DialogHeader>
      <DialogBody className=" h-[600px] py-2 overflow-hidden">
        <TabCandidatInfo />
      </DialogBody>
      <DialogFooter>
        <Button variant="outlined" color="red" className="mr-1 ">
          <span>Supprimer le candidat</span>
        </Button>
        <Button variant="outlined" color="gray" className="mr-1">
          <span>Organiser un entretien</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export function TabCandidatInfo() {
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
          value={"Stats"}
          onClick={() => setActivate("Stats")}
          className={activate === activate ? "text-gray-900" : ""}
        >
          Statistiques
        </Tab>
        <Tab
          value={"Offres"}
          onClick={() => setActivate("Offres")}
          className={activate === activate ? "text-gray-900" : ""}
        >
          Offre d'emploi postulé
        </Tab>
      </TabsHeader>
      <TabsBody className="h-[500px]">
        <TabPanel
          value={"Info"}
          className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 "
        >
          <ContentInfo />
        </TabPanel>
        <TabPanel
          value={"Stats"}
          className="overflow-y-auto h-full [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 p-0"
        >
          <ContentStatistiques />
        </TabPanel>
        <TabPanel value={"Offres"}>
          <ContentOffres />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

export function ContentInfo() {
  return (
    <div className="w-full flex gap-7 relative h-full">
      <div className="w-1/3 flex flex-col gap-4 lg:sticky lg:top-0 lg:self-start">
        {/* Avatar et nom */}
        {/* <Avatar
          src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
          alt="image"
          size="xxl"
        /> */}
        <Typography variant="h5" color="black" className="w-1/2 text-wrap tex">
          RAZANADRAKOTO Jean Michel
        </Typography>
        <Chip
          value="Développeur"
          size="sm"
          className="text-[9px] text-center font-semibold max-w-[100px]"
        />
        {/* Contact */}
        <div className="">
          <Typography
            variant="small"
            color="black"
            className="text-[14px] font-semibold"
          >
            Contact :
          </Typography>
          <div className="ml-2">
            <Typography variant="small" color="gray" className="text-[12px]">
              +261 34 12 345 67
            </Typography>
            <Typography variant="small" color="gray" className="text-[12px]">
              razanadrakoto@gmail.com
            </Typography>
          </div>
        </div>
        {/* Adresse */}
        <div className="">
          <Typography
            variant="small"
            color="black"
            className="text-[14px] font-semibold"
          >
            Adresse :
          </Typography>
          <div className="ml-2">
            <Typography variant="small" color="gray" className="text-[12px]">
              Lot AI 18 Ambohijanahary Antehiroka
            </Typography>
          </div>
        </div>
        {/* Langues */}
        <div className="">
          <Typography
            variant="small"
            color="black"
            className="text-[14px] font-semibold"
          >
            Langues :
          </Typography>
          <div className="ml-2 flex gap-1">
            <Chip
              value="Français"
              size="sm"
              variant="outlined"
              className="text-[9px] font-semibold"
            />
            <Chip
              value="Anglais"
              size="sm"
              variant="outlined"
              className="text-[9px] font-semibold"
            />
            <Chip
              value="Malagasy"
              size="sm"
              variant="outlined"
              className="text-[9px] font-semibold"
            />
          </div>
        </div>
        {/* Score du candidat */}
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography variant="h6" color="blue-gray">
              Score
            </Typography>
            <Typography variant="h6" color="blue-gray">
              75%
            </Typography>
          </div>
          <Progress value={75} className="ml-2" />
        </div>
        {/* Lettre de motivation */}
        {/* <div className="">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-semibold"
          >
            Lettre de motivation :
          </Typography>
          <Button variant="text" size="sm">
            Consulter
          </Button>
        </div> */}
      </div>
      {/* Informations avancés */}
      <div className="w-2/3 flex flex-col gap-4">
        {/* Profil */}
        <div className="w-full flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray">
            Profil :
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="ml-2 text-[12px] font-normal text-justify"
          >
            Développeur web expérimenté avec une solide formation en
            informatique et plusieurs années d’expérience dans la conception et
            le développement d’applications web modernes.
          </Typography>
        </div>
        {/* Compétences */}
        <div className="w-full flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray">
            Compétences :
          </Typography>
          <div className="ml-2 flex gap-1">
            <Chip
              value="HTML"
              size="sm"
              variant="outlined"
              className="text-[9px] font-semibold"
            />
            <Chip
              value="CSS"
              size="sm"
              variant="outlined"
              className="text-[9px] font-semibold"
            />
            <Chip
              value="React"
              size="sm"
              variant="outlined"
              className="text-[9px] font-semibold"
            />
          </div>
        </div>
        {/* Experiences */}
        <div className="w-full flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray" className="">
            Expériences :
          </Typography>
          <div className="ml-2 flex flex-wrap gap-4">
            <div>
              <Typography
                variant="h6"
                color="black"
                className="text-[12px] font-semibold"
              >
                Développeur FullStack JS - 2021
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                E-tech, Antananarivo
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                color="black"
                className="text-[12px] font-semibold"
              >
                Développeur Web - 2018-2020
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                Axian, Madagasacar
              </Typography>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="w-full flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray" className="">
            Formations :
          </Typography>
          <div className="ml-2 flex flex-wrap gap-4">
            <div>
              <Typography
                variant="h6"
                color="black"
                className="text-[12px] font-semibold"
              >
                Master en Informatique - 2020-2021
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                ENI
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                color="black"
                className="text-[12px] font-semibold"
              >
                Liscence en Informatique - 2018-2020
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                ENI Fianaratsoa
              </Typography>
            </div>
          </div>
        </div>
        {/* Notes */}
        <div className="w-full flex flex-col gap-2 rounded-md bg-orange-500 p-2 cursor-pointer">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-semibold"
          >
            Notes :
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="ml-2 text-[12px] font-normal text-justify"
          >
            Candidat motivé et professionnel, doté d’un bon relationnel et d’une
            réelle volonté d’évolution. Ses compétences techniques et sa
            capacité d’adaptation témoignent d’un profil sérieux et impliqué.
            Une personnalité positive qui s’intègrerait facilement dans une
            équipe dynamique.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export function ContentStatistiques() {
  return (
    <div className="w-full h-full flex-col gap-4">
      <div className="w-full flex justify-center items-center gap-2">
        <RadarGraph />
        <RadialBarScore score={75} title="Score global" />
      </div>
      <hr className="my-2" />
      <div className="w-full flex justify-center">
        <div className=" flex flex-col justify-center items-center gap-2">
          <RadialBarScore
            score={60}
            title="Experiences"
            height={150}
            width={150}
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-2">
          <RadialBarScore
            score={50}
            title="Formations"
            height={150}
            width={150}
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-2">
          <RadialBarScore
            score={55}
            title="Compétences"
            height={150}
            width={150}
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-2">
          <RadialBarScore score={45} title="Langues" height={150} width={150} />
        </div>
      </div>
    </div>
  );
}

export function ContentOffres() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-1">
        <Typography
          variant="h6"
          color="gray"
          className="text-[14px] font-semibold"
        >
          Développeur Fullstack JS - 2015-2018
        </Typography>
        <div className="w-1/2 flex gap-2 justify-start items-center ml-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[12px] font-semibold"
          >
            CDI - Temps plein
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[12px] font-semibold"
          >
            Antananarivo
          </Typography>
        </div>
        <Typography
          variant="small"
          className="w-[800px] ml-2 text-[12px] font-normal text-justify"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aspernatur consequatur
          similique doloribus ea aperiam culpa! Quae deserunt cumque provident
          odit dolorem quidem beatae sunt fugit, aperiam voluptas voluptatem
          assumenda voluptatum. Cumque consectetur dicta inventore recusandae
          eos! Perspiciatis assumenda voluptates eveniet quaerat facilis quas,
          minus praesentium nulla nam suscipit iusto fuga sunt veniam?
        </Typography>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Typography
          variant="h6"
          color="gray"
          className="text-[14px] font-semibold"
        >
          {" "}
          Critères d'admission sur chaque section
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="text-[12px] font-semibold ml-4"
        >
          Expériences:{" "}
        </Typography>
        <ul className="list-disc ml-10 text-[12px]">
          <li>Minimum 3 ans d'expérience en développement web</li>
          <li>
            Maîtrise des technologies front-end (HTML, CSS, JavaScript, React)
          </li>
          <li>
            Maîtrise des technologies back-end (Node.js, Express.js, MongoDB)
          </li>
        </ul>
        <Typography
          variant="small"
          color="blue-gray"
          className="text-[12px] font-semibold ml-4"
        >
          Langues:{" "}
        </Typography>
        <ul className="list-disc ml-10 text-[12px]">
          <li>Bon niveau en Langue Francaise </li>
        </ul>
        <Typography
          variant="small"
          color="blue-gray"
          className="text-[12px] font-semibold ml-4"
        >
          Compétences:{" "}
        </Typography>
        <ul className="list-disc ml-10 text-[12px]">
          <li>Maitrise des Méthodologies de travail et conception</li>
          <li>Bonne connaissance en framework React </li>
          <li>
            Maîtrise des technologies back-end (Node.js, Express.js, MongoDB)
          </li>
        </ul>
        <Typography
          variant="small"
          color="blue-gray"
          className="text-[12px] font-semibold ml-4"
        >
          Formations:{" "}
        </Typography>
        <ul className="list-disc ml-10 text-[12px]">
          <li>Possession du Master II </li>
          <li>Bacc + 5 et Bacc + 3 minimum </li>
        </ul>
      </div>
    </div>
  );
}

// Grahpes et stats
export function RadarGraph() {
  const [state] = useState({
    series: [
      {
        name: "Score",
        data: [80, 50, 30, 40],
      },
    ],
    options: {
      xaxis: {
        categories: ["Experience", "Compétences", "Langues", "Formation"],
        labels: {
          style: {
            colors: [
              "#000000",
              "#000000",
              "#000000",
              "#000000",
              "#000000",
              "#000000",
            ],
            fontSize: "12px",
            fontWeight: "bold",
          },
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
        parentHeightOffset: 0,
        offsetY: 0,
        offsetX: 0,
      },
    },
  });
  return (
    <div className="">
      <Chart
        options={state.options}
        series={state.series}
        type="radar"
        height={350}
        width={400}
      />
    </div>
  );
}

type props = {
  score: number;
  title?: string;
  height?: number;
  width?: number;
};

export function RadialBarScore({ score, title, height, width }: props) {
  const [state] = useState({
    series: [score],
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
          pie: {
            donut: {
              size: "70%",
              labels: {
                show: true,
                total: { show: true, label: "Score Global" },
              },
            },
          },
          dataLabels: {
            name: {
              fontSize: "12px",
              fontweight: "bold",
              color: "#000000",
            },
          },
        },
      },
      labels: [`${title ? title : "Score"}`],
    },
  });
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="radialBar"
      height={height}
      width={width}
    />
  );
}
