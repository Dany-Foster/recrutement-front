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
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

import { IoPersonAddSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { SlOptions } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

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
    value: "R"
  },
  {
    label: "Reçue",
    value: "rc"
  }
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
export default function CandidaturePages() {
  const [Open, setOpen] = useState(false);
  const HandleOpen = () => setOpen(!Open);
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
                Voir les informations des candidats, leurs candidatures et leurs offres d'emploi
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button onClick={HandleOpen} className="flex items-center gap-3" size="sm" variant="gradient">
                <IoPersonAddSharp strokeWidth={2} className="h-4 w-4" /> AJouter un candidat
              </Button>
              <AddCandidat open={Open} HandleOpen={HandleOpen}/>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="All" className="w-full md:w-[650px]">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value} className="text-[8px] md:text-[14px] font-normal">
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<LuSearch className="h-5 w-5" />}
              />
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
    </div>
  );
}

export function AddCandidat({open, HandleOpen}: {open: boolean, HandleOpen: () => void}) {


  return (
    <Dialog size="sm" open={open} handler={HandleOpen} className="p-4">
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4" color="blue-gray" className="text-[20px] font-bold uppercase">
          Ajouter un candidat
        </Typography>
        <Typography className="mt-1 font-normal font-gray-400">
          Ajouter un candadit à partir de son CV
        </Typography>
        <IconButton
            size="md"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={HandleOpen}>
          <IoClose
            className="h-4 w-4"
          />
        </IconButton>
      </DialogHeader>
      <DialogBody className="space-y-4">
        <form>
          <input type="file" id="file" className="hidden" />
          <div className="w-full flex flex-col mb-4 cursor-pointer items-center justify-center h-[150px] border-2 border-dashed border-gray-400 rounded-lg">
            <Typography>
              Insérer un fichier de format
            </Typography>
            <Typography variant="small" className="text-[12px] font-semibold">
              .pdf .word .csv
            </Typography>
          </div>
          <Button variant="gradient" className="w-full">Valider</Button>
        </form>
      </DialogBody>
    </Dialog>
  )
}