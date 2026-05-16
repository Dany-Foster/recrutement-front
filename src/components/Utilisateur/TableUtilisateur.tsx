/* trunk-ignore-all(prettier) */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { LuCalendarSearch } from "react-icons/lu";
import { MdDelete, MdOutlineCardTravel } from "react-icons/md";
import { utilisateur } from "../Hooks/type";
import { useData } from "../Hooks/useData";
import { PaginationTable } from "../Pagination";

const TABLE_HEAD = ["Nom", "Email", "Role", ""];

export default function TableUtilisateur({
  actionOpen,
}: {
  actionOpen: () => void;
}) {
  const [search, setSearch] = useState("");

  const { data } = useData();

  const colors = (value: string) => {
    if (value === "Ouvert") {
      return "green";
    } else {
      return "red";
    }
  };

  const searchTable = useMemo(() => {
    return (
      data.utilisateurs &&
      data.utilisateurs.filter((utilisateur: utilisateur) => {
        return utilisateur !== undefined
          ? utilisateur.name.toLowerCase().includes(search.toLowerCase()) ||
              utilisateur.role?.toLowerCase().includes(search.toLowerCase()) ||
              utilisateur.email
                ?.toLocaleLowerCase()
                .includes(search.toLowerCase())
          : utilisateur;
      })
    );
  }, [data.utilisateurs, search]);

  const handleDelete = (id: number) => {};

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des utilisateurs
            </Typography>
            <Typography
              color="gray"
              className="mt-1 text-[12px] lg:text-[14px] font-normal brea"
            >
              Vous pouvez consulter la liste des utilisateur
            </Typography>
          </div>
        </div>
        {/** Input recherche et le bouton group */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center justify-around gap-4">
            <div className="w-full md:w-72">
              <Input
                label="Rechercher....."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={<CiSearch className="h-5 w-5" />}
              />
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex items-center gap-3"
                size="sm"
                variant="gradient"
                onClick={actionOpen}
              >
                <MdOutlineCardTravel strokeWidth={2} className="h-4 w-4" />
                Ajouter une utilisateur
              </Button>
            </div>
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
              searchTable.map((donnee: utilisateur, index: number) => {
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
                            {donnee.name}
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
                          {donnee.email}
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
                          {donnee.role}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-2">
                        <Tooltip content="Modifier l'offre">
                          <IconButton variant="text">
                            <MdDelete className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
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
                        Aucun utilisateur inscrit
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
    </Card>
  );
}
