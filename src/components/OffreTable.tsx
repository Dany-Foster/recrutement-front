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
} from "@material-tailwind/react";
import { MdOutlineCardTravel } from "react-icons/md";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import { DialogHeader } from "@material-tailwind/react";
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
 
const TABLE_HEAD = ["Offres", "Poste", "Status", "Nb candidat", ""];
 
const TABLE_ROWS = [
  {
    name: "Développeur Javascript",
    contrat: "CDI",
    temps: "Temps plein",
    email: "laurent@creative-tim.com",
    job: "Développeur Frontend",
    online: "Cloturé",
    bnCandidat: "45",
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
              ({  name , job, online, bnCandidat, bg, contrat, temps }, index) => {
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
          <IoIosClose className="h-5 w-5"/>
        </IconButton>
      </DialogHeader>
    </Dialog>
  )
}