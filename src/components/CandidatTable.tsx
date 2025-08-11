import { IoPersonAddSharp } from "react-icons/io5";
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
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
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
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];
 
export default function SortableTable() {
  return (
    <Card className="h-full w-full lg:w-[700px]">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des Candidats
            </Typography>
            <Typography color="gray" className="mt-1 text-[12px] lg:text-[14px] font-normal brea">
              Vous pouvez consulter la liste des candidats, leurs candidatures et
              leurs offres d'emploi.
            </Typography>
          </div>
          <div className="flex shrink-0 lg:flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              Tout afficher
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <IoPersonAddSharp strokeWidth={2} className="h-4 w-4" /> Ajouter un Candidat
            </Button>
          </div>
        </div>
        {/** Input recherche et le bouton group */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="Tout" className="w-full md:w-[650px]">
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
              ({ img, name, email, job, org, online, date }, index) => {
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
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
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
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
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
    </Card>
  );
}