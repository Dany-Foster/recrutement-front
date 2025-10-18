/* trunk-ignore-all(prettier) */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  ChipProps,
  IconButton,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { LuCalendarSearch } from "react-icons/lu";
import { MdOutlineCardTravel } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { AddPoste } from "..";
import { formatDate } from "../../lib/utils";
import { Offres } from "../Hooks/type";
import { useData } from "../Hooks/useData";
import { PaginationTable } from "../Pagination";
import { DialogOffre } from "./DialogOffre";
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

const TABLE_HEAD = ["Offres", "Poste", "Cloturation", "Contrat", "Status", ""];

export default function SortableTable({
  actionOpen,
}: {
  actionOpen: () => void;
}) {
  const [openDetails, setOpenDetails] = useState(false);
  const [value, setValue] = useState("T");
  const [search, setSearch] = useState("");

  const handleOpenDetails = (offre?: Offres) => {
    if (openDetails) {
      setOpenDetails(false);
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
    } else {
      return "Format invalide";
    }
  };

  const colors = (value: string) => {
    if (value === "Ouvert") {
      return "green";
    } else {
      return "red";
    }
  };

  const filterTable = useMemo(() => {
    switch (value) {
      case "T":
        return data.offres.filter((offre: Offres) => {
          return offre;
        });
      case "O":
        return data.offres.filter((offre: Offres) => {
          if (cloturation(offre.date_clot ? offre.date_clot : "") === "Ouvert")
            return offre;
        });
      case "F":
        return data.offres.filter((offre: Offres) => {
          if (cloturation(offre.date_clot ? offre.date_clot : "") === "Fermé")
            return offre;
        });
      default:
        return data.offres;
    }
  }, [data, value]);

  const searchTable = useMemo(() => {
    return filterTable.filter((offre: Offres) => {
      return offre !== undefined
        ? offre.titre?.toLowerCase().includes(search.toLowerCase()) ||
            offre.poste?.poste.toLowerCase().includes(search.toLowerCase()) ||
            offre.contrat?.toLocaleLowerCase().includes(search.toLowerCase()) ||
            offre.temps?.toLocaleLowerCase().includes(search.toLowerCase())
        : offre;
    });
  }, [filterTable, search]);

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
                <MdOutlineCardTravel strokeWidth={2} className="h-4 w-4" />
                ajoouter une offre
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
                  onClick={() => setValue(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<CiSearch className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-0 overflow-scroll lg:overflow-auto h-[360px]">
        <table className="mt-4 w-full min-w-max  table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
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
          <tbody className="w-full h-full relative">
            {searchTable.length > 0 ? (
              searchTable !== undefined &&
              searchTable.map((donnee: Offres, index: number) => {
                const isLast = index === searchTable.length - 1;
                const classes = isLast ? "px-4 py-2" : "px-4 py-2";

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
                          {donnee.poste && donnee.poste.poste}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Typography
                          variant="small"
                          color="gray"
                          className="text-[12px] font-normal flex gap-2"
                        >
                          <Chip value={donnee.contrat} size="sm" /> -
                          <strong>{donnee.temps}</strong>
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
                      <Typography
                        className="text-center"
                        variant="small"
                        color="blue-gray"
                      >
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={cloturation(
                            donnee.date_clot ? donnee.date_clot : ""
                          )}
                          color={
                            colors(
                              cloturation(
                                donnee.date_clot ? donnee.date_clot : ""
                              )
                            ) as ChipProps["color"]
                          }
                        />
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
              })
            ) : (
              <div className=" w-full h-full flex flex-col gap-6 justify-center items-center absolute top-[100px]">
                <tr key={1}>
                  <td colSpan={4}>
                    <div className=" w-full h-full flex flex-col gap-6 justify-center items-center">
                      <LuCalendarSearch strokeWidth={2} size={80} />
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-[18px]"
                      >
                        Aucune offre d'emploi disponible
                      </Typography>
                    </div>
                  </td>
                </tr>
              </div>
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
        <PaginationTable />
      </CardFooter>
      <DialogOffre open={openDetails} handleChange={handleOpenDetails} />
    </Card>
  );
}
