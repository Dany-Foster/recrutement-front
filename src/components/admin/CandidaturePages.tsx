import { DataTable, ToggleButtons, ScrollContent } from "components";
import ExampleInput from "components/ExampleInput";
import { useState } from "react";


const CandidaturePages = () => {
  return(
      <main>
        <div className="flex flex-col gap-4 px-4 sm:px-2 lg:px-4 w-full">
          <h3 className="text-[18px] font-bold">Candidature</h3>
            <FormCandidat/>
          <div className="w-full flex flex-col lg:flex-row gap-4 items-start justify-between">
            <div className="w-full lg:w-[500px] bg-white shadow-md rounded-md p-4">
              <h3 className="text-[18px] font-bold text-[#000]">Résultat de l'évaluation</h3>
              <p className="text-[14px] font-normal text-[#75767C]">
                Vous pouvez consulter les résultats de l'évaluation des candidats.
              </p>
            </div>
          </div>
          <SectionCandidat />
        </div>
      </main>
  )
};

export function FormCandidat() {
  return (
    <div className="w-full lg:px-0 lg:w-[500px] flex items-center shadow-md bg-white rounded-md p-4">
      <form className="flex flex-col lg:flex-row w-full lg:w-[500px] justify-start gap-2 items-center">
        <ExampleInput/>
        <button className="text-[12px] m-auto font-bold border-1 bg-white border-[#000] text-[#000] px-4 py-2 rounded-md hover:bg-[#000] hover:text-[#F5F7F9] mr-3">Ajouter</button>
      </form>
    </div>
  )
}

export function SectionCandidat(){
  const  [data, setData] = useState([])
  return (
    <section className="w-full px-2 lg:px-0 lg:pr-4 mt-2">
      <div className="w-full bg-white shadow-md rounded-md">
        <div  className="flex flex-col justify-arround gap-4 p-4">
          <div  className="">
            <h3 className="text-[18px] font-bold ">Liste des candidats</h3>
            <p className="text-[14px] font-normal text-[#75767C]">
              Vous pouvez consulter la liste des candidats, leurs candidatures et
              leurs offres d'emploi.
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-2 items-center justify-between ">
            <ToggleButtons/>
            <div className="flex items-center gap-2 ">
              <div className="w-[300px] bg-[#F5F7F9] px-4 py-2  rounded-md border-1 border-[#75767C]">
                <input
                  type="text"
                  placeholder="Rechercher un candidat"
                  className="w-full outline-none text-[14px] text-[#000]  placeholder:text-[14px]"
                  value=""
                />
              </div>
            </div>
          </div>
          {/* Here you can add a table or list to display candidates
          <p className="text-[14px] text-gray-600">Aucune candidature trouvée.</p> */}
          {/* Placeholder for candidates list */}
          <DataTable />
        </div>
      </div>
    </section>
  )
}

export default CandidaturePages;
