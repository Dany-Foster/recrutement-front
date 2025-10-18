import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Progress,
  Typography,
} from "@material-tailwind/react";
import { FaBriefcase, FaBuilding, FaCheckCircle, FaUser } from "react-icons/fa";
import { Candidats } from "./Hooks/type";

// interface Experience {
//   poste: string;
//   entreprise: string;
// }

// interface Competence {
//   nom: string;
//   correspondance: number;
// }

const AnalyseResult = ({ candidat }: { candidat: Candidats }) => {
  return (
    <Card className="w-full h-full shadow-md border border-gray-200 rounded-xl">
      {/* Header */}
      <CardHeader
        color="blue-gray"
        className="p-4 flex items-center justify-between bg-blue-gray-900 text-white rounded-t-xl"
      >
        <Typography variant="h6" color="white">
          Résultat d’analyse
        </Typography>
        <FaCheckCircle className="text-green-400 text-xl" />
      </CardHeader>

      {/* Body */}
      <CardBody className="p-5 flex flex-col gap-4 overflow-y-auto">
        {/* Informations générales */}
        {candidat !== null && (
          <>
            <div className="flex items-center gap-3">
              <FaUser className="text-blue-gray-700 text-2xl" />
              <div>
                <Typography variant="h6" color="blue-gray">
                  {candidat.nom}
                </Typography>
                <Typography variant="small" color="gray">
                  {candidat.nom} {candidat.prenom}
                </Typography>
              </div>
            </div>
            <div className="mt-2">
              <Typography variant="small" color="gray" className="mb-1">
                Profil
              </Typography>
              <Typography variant="paragraph" color="blue-gray">
                {candidat.profil}
              </Typography>
            </div>

            <div className="mt-2">
              <Typography variant="small" color="gray" className="mb-1">
                Score global
              </Typography>
              <Progress
                value={Number(candidat.Score_Glob)}
                color="green"
                className="h-3 mb-1"
              />
              <Typography variant="small" color="blue-gray">
                {candidat.Score_Glob}
              </Typography>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <FaBriefcase className="text-blue-gray-700 text-lg" />
              <Typography variant="small" color="blue-gray">
                Pertinence pour le poste :{" "}
              </Typography>
            </div>
            <div className="mt-4">
              <Typography variant="small" color="gray" className="mb-2">
                Compétences correspondantes
              </Typography>
              <div className="space-y-2">
                {candidat.competences &&
                  candidat.competences.map((comp, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <Typography variant="small" color="blue-gray">
                        {comp.competence}
                      </Typography>
                      <Progress
                        value={Number(comp.score)}
                        color="blue"
                        className="h-2 w-2/3"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-6">
              <Typography variant="small" color="gray" className="mb-2">
                Expériences professionnelles
              </Typography>
              <div className="space-y-2">
                {candidat.Exp &&
                  candidat.Exp.map((exp, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-blue-gray-50 p-3 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <FaBuilding className="text-blue-gray-600 text-lg" />
                        <div>
                          <Typography variant="small" color="blue-gray">
                            {exp.entreprise}
                          </Typography>
                          <Typography variant="small" color="gray">
                            {exp.poste}
                          </Typography>
                        </div>
                      </div>
                      <Chip
                        value="Expérience analysée"
                        color="green"
                        variant="outlined"
                        className="text-xs"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default AnalyseResult;
