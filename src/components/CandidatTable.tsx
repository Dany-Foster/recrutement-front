import {
  Avatar,
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
  Progress,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import Chart from "react-apexcharts";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
const TABS = [
  {
    label: "Tout",
    value: "Tout",
  },
  {
    label: "En cours",
    value: "EC",
  },
  {
    label: "Entretien",
    value: "ET",
  },
  {
    label: "Reçu",
    value: "R",
  },
  {
    label: "Rejeté",
    value: "RJ",
  },
];

const TABLE_HEAD = ["Candidat", "Poste", "Status", "Score", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: "En cours",
    date: "60%",
    bg: "blue",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: "Entretien",
    date: "80%",
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
    date: "20%",
    bg: "red",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: "En cours",
    date: "40%",
    bg: "blue",
  },
];

export default function SortableTable() {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!Open);
  return (
    <Card className="h-full w-full lg:w-[700px]">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" className="uppercase">
              Liste des Candidats
            </Typography>
            <Typography
              color="gray"
              className="mt-1 text-[12px] lg:text-[14px] font-normal brea"
            >
              Vous pouvez consulter la liste des candidats, leurs candidatures
              et leurs offres d'emploi.
            </Typography>
          </div>
        </div>
        {/** Input recherche et le bouton group */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="Tout" className="w-full md:w-[650px]">
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
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
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
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                      <Progress value={50} color="gray" />
                    </td>
                    <td className={classes}>
                      <Tooltip content="Détails">
                        <IconButton variant="text" onClick={handleOpen}>
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
        <div className="flex items-center gap-2 justify-center p-2 border border-black rounded-md">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 de 10
          </Typography>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Précedent
          </Button>
          <Button size="sm" variant="filled">
            Suivant
          </Button>
        </div>
      </CardFooter>
      <ModalCardCandidat open={Open} handleOpen={handleOpen} />
    </Card>
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
        {/* <Avatar src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="image" size="xxl"/> */}
        <Typography variant="h5" color="black" className="w-1/2 text-wrap tex">
          RAZANADRAKOTO Jean Michel
        </Typography>
        <Chip
          value="Manager"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
                Développeur Web - 2018-2020
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                Entreprise ABC, Antananarivo
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                color="black"
                className="text-[12px] font-semibold"
              >
                Développeur FullStack JS - 2015-2018
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                Entreprise ABC, Antananarivo
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
                Entreprise ABC, Antananarivo
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
                Bachelor en Informatique - 2018-2020
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                Université XYZ, Antananarivo
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                color="black"
                className="text-[12px] font-semibold"
              >
                Bachelor en Informatique - 2018-2020
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[10px] font-normal"
              >
                Université XYZ, Antananarivo
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <div className=" flex flex-col justify-center items-center gap-2">
          <RadialBarScore score={20} title="Autres" height={150} width={150} />
        </div>
      </div>
    </div>
  );
}

export function ContentOffres() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <Typography
          variant="h6"
          color="gray"
          className="text-[14px] font-semibold"
        >
          Développeur Fullstack JS - 2015-2018
        </Typography>
        <Typography
          variant="small"
          className="w-[500px] ml-2 text-[12px] font-normal text-justify"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          consectetur dicta inventore recusandae eos! Perspiciatis assumenda
          voluptates eveniet quaerat facilis quas, minus praesentium nulla nam
          suscipit iusto fuga sunt veniam?
        </Typography>
      </div>
      <Typography
        variant="h6"
        color="gray"
        className="text-[14px] font-semibold"
      >
        CDI - Temps plein
      </Typography>
      <div className="w-full flex flex-col gap-2">
        <Typography
          variant="h6"
          color="gray"
          className="text-[14px] font-semibold"
        >
          {" "}
          Critères d'admission
        </Typography>
        <ul className="list-disc ml-4 text-[12px]">
          <li>Minimum 3 ans d'expérience en développement web</li>
          <li>
            Maîtrise des technologies front-end (HTML, CSS, JavaScript, React)
          </li>
          <li>
            Maîtrise des technologies back-end (Node.js, Express.js, MongoDB)
          </li>
        </ul>
      </div>
    </div>
  );
}

// Grahpes et stats
export function RadarGraph() {
  const [state, setState] = useState({
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
  const [state, setState] = useState({
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
