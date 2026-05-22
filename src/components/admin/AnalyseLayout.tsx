import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { DropZone } from "..";
import { Candidats } from "../Hooks/type";

const AnalyseLayout = () => {
  const [file, setFile] = useState<File | null>(null);
  const [offre, setOffre] = useState("");
  const [candidat, setCandidat] = useState<Candidats | null>(null);

  // Appel au données dans le contexte
  // const handleAddCandidat = (e: FormEvent) => {
  //   e.preventDefault();
  //   const user = data.user.id;

  //   const Candidat: DataCandidat = {
  //     file: file,
  //     user: user,
  //     offre_id: offre,
  //   };
  //   CreateCandidat(Candidat).then((res) => {
  //     setCandidat(res ? res : []);
  //   });
  // };
  return (
    <div className="w-full px-2 lg:px-4 mt-4 flex flex-col gap-2">
      <Typography variant="h3" className="text-[20px] font-bold uppercase">
        Evaluation d'une candidature
      </Typography>
      <div className="w-full flex gap-2 items-start">
        <form
          action=""
          onSubmit={handleAddCandidat}
          className="w-1/2 flex flex-col justify-center items-center gap-2"
        >
          {/* <Card className="w-full">
            <CardBody className="w-full flex gap-2 justify-start items-center">
              <Select
                id="type"
                value={offre}
                label="Offre disponibles"
                onChange={(val) => val !== undefined && setOffre(val)}
              >
                {data.offres.map((donnee: Offres, index: number) => (
                  <Option key={index} value={donnee.id}>
                    {donnee.titre}
                  </Option>
                ))}
              </Select>
              <Button type="submit">Evaluer</Button>
            </CardBody>
          </Card> */}
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className=" w-full bg-white rounded-2xl shadow-md flex justify-center">
              <DropZone
                onFiles={setFile}
                fichier={file}
                className="w-full h-[520px] flex justify-center items-center text-gray-600"
                accept="pdf"
              />
            </div>
          </div>
        </form>
        <div className="w-1/2 h-[615px]">
          {/* <AnalyseResult candidat={candidat} /> */}
        </div>
      </div>
    </div>
  );
};

export default AnalyseLayout;
