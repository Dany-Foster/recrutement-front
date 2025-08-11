import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";

// import { ToggleButtons } from "components";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import RecrutmentChart from "../ChartReact";
import CandidatChart from "../RadialChart";
import { CandidatTable, OffreTable } from "..";
import { Card, CardHeader, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { SlOptions } from "react-icons/sl";




export function Container(){
  return (
      <div
        className="flex flex-col gap-2 px-4 sm:px-2 lg:px-4 pt-4 w-full mb-2"
        >
        <div className="">
          <h3 className="text-[20px] font-bold">TABLEAU DE BORD</h3>
          <p className="text-[14px] font-normal text-[#75767C]">
            Bienvenue sur votre tableau de bord, vous pouvez consulter vos
            candidatures, vos offres d'emploi et vos analyses.
          </p>
        </div>
        <div className="w-full flex lg:flex-row flex-col lg:items-center lg:justify-start gap-[25px]">
          <TableauBord />
          <div  className="max-w-full lg:w-[calc(100%-225px)] h-[369px] bg-white rounded-md shadow-md p-3">
            <div  className="w-full h-full pt-4">
              <RecrutmentChart />
            </div>
          </div>
        </div>
        <div  className="mt-4 flex lg:flex-row flex-col gap-[18px]">
          <CandidatTable/>
          <Card className="w-full h-[360px] lg:w-[calc(100%-700px)] bg-white rounded-md shadow-md p-4">
            <CardHeader floated={false} shadow={false} className="flex items-center justify-between py-2">
              <Typography variant="h5" color="black" className="text-[16px]">Candidat par Statut</Typography>
                <Tooltip content="Modifier l'offre">
                  <IconButton variant="text">
                    <SlOptions className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
            </CardHeader>
            <div className="w-full mt-2">
              <CandidatChart />
            </div>
          </Card>
        </div>
        <div className="w-full lg:w-[700px] mt-4 flex flex-col">
          <OffreTable />
        </div>
      </div>
  );
}

export function CardInfo({children}: {children?: React.ReactNode}) {
  return (
    <div className="flex items-center gap-[12px] w-full lg:w-[300px] h-[80px] bg-white rounded-md shadow-md p-4">
        {children}
    </div>
  )
}


export function TableauBord(){

  return (
    <div className="mt-4 pb-2">
      <section className="w-full flex flex-wrap lg:flex-col lg:justify-start gap-[15px]">
        <div className="w-full lg:w-[250px] bg-white rounded-md shadow-md py-2 px-3">
          <div  className=" w-full h-full flex flex-col justify-start gap-[4px]">
            <div  className="h-full w-full flex  justify-between items-center pt-[2px]">
              <div className="w-full flex gap-[7px] items-center justify-start">
                <div className="w-[20px] h-[20px] bg-[#F5F7F9] text-black shadow-sm text-[20px] rounded-lg flex items-center justify-center">
                  <HiMiniUserGroup fontSize={10} />
                </div>
                <h3 className="text-[14px] font-medium text-[#75767C]">Candidatures</h3>
              </div>
            <HiOutlineInformationCircle fontSize={20} className="text-[#75767C]"/>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-[40px] font-semibold text-black">128</span>
              <div className="flex items-center justify-center gap-1 bg-[#F5F7F9] px-2 py-1 rounded-md shadow-sm">
                <img src="/images/increase.png" alt="" width={20}/>
                <span className="font-semibold text-[12px] text-[#5AB267]">2%</span>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full lg:w-[250x] bg-white rounded-md shadow-md py-2 px-3">
          <div  className=" w-full h-full flex flex-col justify-start gap-[4px]">
            <div  className="h-full w-full flex  justify-between items-center pt-[2px]">
              <div className="w-full flex gap-[7px] items-center justify-start">
                <div className="w-[20px] h-[20px] bg-[#F5F7F9] text-black shadow-sm text-[20px] rounded-lg flex items-center justify-center">
                  <MdOutlineWorkOutline fontSize={10} />
                </div>
                <h3 className="text-[14px] font-medium text-[#75767C]">Postes</h3>
              </div>
            <HiOutlineInformationCircle fontSize={20} className="text-[#75767C]"/>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-[40px] font-semibold text-black">12</span>
              <div className="flex items-center justify-center gap-1 bg-[#F5F7F9] px-2 py-1 rounded-md shadow-sm">
                <img src="/images/increase.png" alt="" width={20}/>
                <span className="font-semibold text-[12px] text-[#5AB267]">2%</span>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
                <div className="w-full lg:w-[250px] bg-white rounded-md shadow-md py-2 px-3">
          <div  className=" w-full h-full flex flex-col justify-start gap-[4px]">
            <div  className="h-full w-full flex  justify-between items-center pt-[2px]">
              <div className="w-full flex gap-[7px] items-center justify-start">
                <div className="w-[20px] h-[20px] bg-[#F5F7F9] text-black shadow-sm text-[20px] rounded-lg flex items-center justify-center">
                  <PiReadCvLogoFill fontSize={10} />
                </div>
                <h3 className="text-[14px] font-medium text-[#75767C]">Offres</h3>
              </div>
            <HiOutlineInformationCircle fontSize={20} className="text-[#75767C]"/>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-[40px] font-semibold text-black">8</span>
              <div className="flex items-center justify-center gap-1 bg-[#F5F7F9] px-2 py-1 rounded-md shadow-sm">
                <img src="/images/increase.png" alt="" width={20}/>
                <span className="font-semibold text-[12px] text-[#5AB267]">2%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export function OffreSection(){
  return (
    <section className="w-full mt-2 flex flex-col lg:flex-row justify-between gap-2" >
      <div className=" shadow-md rounded-md w-full lg:w-[650px]  bg-white mt-4">
        <div className="flex flex-col justify-arround gap-4 py-4 px-2">
          <div className="">
            <h3 className="text-[18px] font-bold ">Liste des offres d'emplois</h3>
            <p className="text-[14px] font-normal text-[#75767C]">
              Vous pouvez consulter la liste des offres d'emplois, leurs candidatures et
              leurs candidats.
            </p>
          </div>
          <div className="w-full flex items-center justify-between gap-2 ">
            <div className="flex lg:flex-row lg:items-center gap-2 ">
              <div className="w-[300px] bg-[#F5F7F9] px-4 py-2 rounded-md border-1 border-[#75767C]">
                <input
                  type="text"
                  placeholder="Rechercher une offre d'emploi"
                  className="w-full outline-none text-[14px] text-[#000]  placeholder:text-[14px]"
                  value=""
                  />
              </div>
              <NavLink
                to="/admin/offres"
                className="text-[12px] m-auto font-bold border-1 bg-white border-[#000] text-[#000] px-4 py-2 rounded-md hover:bg-[#000] hover:text-[#F5F7F9] flex items-center gap-2"
                >
                  Ajouter
              </NavLink>
            </div>
          </div>
          {/* Here you can add a table or list to display job offers */}
          {/* <OffreTable/> */}
          {/* Placeholder for job offers list */}
        </div>
      </div>
      <div className="shadow-md rounded-md w-full lg:w-[calc(100%-600px)] bg-white mt-4">
        <div className="flex flex-col justify-arround gap-4 p-4">
          <div className="">
            <h3 className="text-[18px] font-bold ">Liste des postes</h3>
          </div>
          <div className="w-full flex items-center justify-between gap-2 ">
            <div className="flex lg:flex-row lg:items-center gap-2 ">
              <div className=" bg-[#F5F7F9] px-4 py-2  rounded-md border-1 border-[#75767C]">
                <input
                  type="text"
                  placeholder="Rechercher un poste"
                  className="w-full outline-none text-[14px] text-[#000]  placeholder:text-[14px]"
                  value=""
                  />
              </div>
              <NavLink
                to="/admin/offres"
                className="text-[12px] m-auto font-bold border-1 bg-white border-[#000] text-[#000] px-4 py-2 rounded-md hover:bg-[#000] hover:text-[#F5F7F9] flex items-center gap-2"
                >
                  Ajouter
              </NavLink>
            </div>
          </div>
          <div className="w-full  mt-2">
            {/* Placeholder for job offers analysis chart */}
            {/* <TabPost/> */}
          </div>
        </div>
      </div>
    </section>
  )
}

const Dashboard = () => {
  return (
    <main className="w-full">
      <Container />
    </main>
  );
};


export default Dashboard;
