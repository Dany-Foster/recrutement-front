import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";

import RecrutmentChart from "../ChartReact";
import CandidatChart from "../RadialChart";
import { CandidatTable } from "..";
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import OfferChart from "../OfferChart";
// import { SlOptions } from "react-icons/sl";




export function Container(){
  return (
      <div
        className="flex flex-col gap-2 px-4 sm:px-2 lg:px-4 pt-4 w-full mb-2"
        >
        <div className="">
          <h3 className="text-[20px] font-bold">TABLEAU DE BORD</h3>
          <p className="pl-2 text-[14px] font-normal text-[#75767C]">
            Bienvenue sur votre tableau de bord, vous pouvez consulter vos
            candidatures, vos offres d'emploi et vos analyses.
          </p>
        </div>
        <div className="w-full flex lg:flex-row flex-col lg:items-center lg:justify-start gap-[25px]">
          <TableauBord />
          <Card  className="max-w-full lg:w-[calc(100%-225px)] h-[369px]">
            <CardBody>
              <RecrutmentChart />
            </CardBody>
          </Card>
        </div>
        {/* Section Candidat et modification des informations personnelles */}
        <div  className="mt-4 flex lg:flex-row flex-col gap-[18px]">
          <CandidatTable/>
          <div className="w-full lg:w-[calc(100%-700px)] flex flex-col gap-2">
            <Card className="w-full h-[400px] bg-white shadow-md p-2">
              <CardHeader floated={false} shadow={false} className="flex items-center rounded-none justify-center px-1 ">
                <Typography variant="h5" color="black" className="text-[16px] uppercase">Candidat répartie par Statut</Typography>
              </CardHeader>
              <div className="w-full mt-2">
                <CandidatChart />
              </div>
            </Card>
            <Card className="w-full h-[calc(100%-300px)]">
              <CardHeader className="rounded-none" floated={false} shadow={false}>
                <Typography variant="h5" color="black" className="text-[14px] uppercase">Ajout de Candidat</Typography>
              </CardHeader>
              <CardBody className="flex flex-col justify-center items-center gap-2">
                <div className="w-full flex flex-col items-center justify-center h-[150px] border-2 border-dashed border-gray-400 rounded-lg">
                  <Typography>
                    Insérer un fichier de format
                  </Typography>
                  <Typography variant="small" className="text-[12px] font-semibold">
                    .pdf .word .csv
                  </Typography>
                </div>
                <Button className="text-[12px]" size="sm">Ajouter le candidat</Button>
                <form action="" className="">
                  <input
                    type="file"
                    className="hidden"
                  />
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* Section Suivi de candidature lors de l'entretien*/}
        <section className="w-full mt-2 flex flex-col lg:flex-row gap-2">
          <Card className="w-full lg:w-[500px]">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[4px]">
                  <Typography variant="h5" className="text-[18px] font-semibold uppercase text-black">
                    Offres d'emplois
                  </Typography>
                </div>
                  <Button className="flex items-center gap-2" size="sm">
                    <IoMdAdd size={20}/> Ajouter
                  </Button>
              </div>
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
              <div className="w-full">
                <Input
                  type="search"
                  label="Rechercher"
                  icon={<CiSearch className="h-5 w-5" />}
                />
              </div>
              {/* Listes d'offres */}
              <div className="w-full border border-black rounded-lg p-2 hover:shadow-lg flex items-center justify-between">
                <div className="flex flex-col gap-[4px]">
                  <Typography variant="h5" className="text-[14px] font-semibold text-black">Développeur Fullstack Js</Typography>
                  <Typography variant="small" className="text-[12px] font-medium">20 Jul 2025 - 10:00 AM</Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600 flex gap-1"> <MdAccessTime size={15}/> Temps plein</Typography>
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600"><span className="font-semibold text-black">Contrat:</span> <span>CDI</span></Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Button size="sm">Détails</Button>
                </div>
              </div>
              <div className="w-full border border-black rounded-lg p-2 hover:shadow-lg flex items-center justify-between">
                <div className="flex flex-col gap-[4px]">
                  <Typography variant="h5" className="text-[14px] font-semibold text-black">Développeur Fullstack PHP</Typography>
                  <Typography variant="small" className="text-[12px] font-medium">20 Jul 2025 - 10:00 AM</Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600 flex gap-1"> <MdAccessTime size={15}/> Temps plein</Typography>
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600"><span className="font-semibold text-black">Contrat:</span> <span>CDI</span></Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Button size="sm">Détails</Button>
                </div>
              </div>
              <div className="w-full border border-black rounded-lg p-2 hover:shadow-lg flex items-center justify-between">
                <div className="flex flex-col gap-[4px]">
                  <Typography variant="h5" className="text-[14px] font-semibold text-black">Développeur JAVA</Typography>
                  <Typography variant="small" className="text-[12px] font-medium">20 Jul 2025 - 10:00 AM</Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600 flex gap-1"> <MdAccessTime size={15}/> Temps plein</Typography>
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600"><span className="font-semibold text-black">Contrat:</span> <span>CDI</span></Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Button size="sm">Détails</Button>
                </div>
              </div>
              <div className="w-full border border-black rounded-lg p-2 hover:shadow-lg flex items-center justify-between">
                <div className="flex flex-col gap-[4px]">
                  <Typography variant="h5" className="text-[14px] font-semibold text-black">Administrateur réseau</Typography>
                  <Typography variant="small" className="text-[12px] font-medium">20 Jul 2025 - 10:00 AM</Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600 flex gap-1"> <MdAccessTime size={15}/> Temps plein</Typography>
                  <Typography variant="small" className="text-[12px] font-medium text-gray-600"><span className="font-semibold text-black">Contrat:</span> <span>CDI</span></Typography>
                </div>
                <div className="flex- flex-col gap-[4px]">
                  <Button size="sm">Détails</Button>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button className="w-full" size="sm">Tout afficher</Button>
            </CardFooter>
          </Card>
          <Card className="mt-2 w-full lg:w-[calc(100%-500px)]">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <Typography variant="h5" className="text-[14px] font-semibold text-black">L'évolution de nombre d'offre crée par période</Typography>
            </CardHeader>
            <CardBody>
              <OfferChart/>
            </CardBody>
          </Card>
        </section>
        {/* suivie de candidature sur l'entretien */}
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



const Dashboard = () => {
  return (
    <main className="w-full">
      <Container />
    </main>
  );
};


export default Dashboard;
