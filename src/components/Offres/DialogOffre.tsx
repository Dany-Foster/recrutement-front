import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Spinner,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import { useData } from "../Hooks/useData";
import CandidatPostule from "./CandidatPostule";
import InfoOffre from "./InfoOffre";
import ModifOffre from "./ModifOffre";
export function DialogOffre({
  open,
  handleChange,
}: {
  open: boolean;
  handleChange: () => void;
}) {
  const [loader, setLoader] = useState(false);
  const { HandleUpdateOffre, HandleDeleteOffre } = useData();
  const HandleModify = () => {
    if (!loader) setLoader(true);
    HandleUpdateOffre(handleChange);
    setLoader(false);
  };
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
          onClick={HandleModify}
          className="mr-1 flex justify-center items-center gap-4"
        >
          {loader && <Spinner className="h-4 w-4" />}
          <Typography
            variant="small"
            color="white"
            className="text-[14px] font-semibold"
          >
            Modifier l'offre
          </Typography>
        </Button>
        <Button variant="text" color="blue" onClick={handleChange}>
          <span>Fermer</span>
        </Button>
        <Button
          variant="text"
          color="red"
          className="ml-auto"
          onClick={HandleDeleteOffre}
        >
          {loader && <Spinner className="h-4 w-4" />}
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
