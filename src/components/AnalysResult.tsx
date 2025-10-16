import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Progress,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { FaBriefcase, FaBuilding, FaCheckCircle, FaUser } from "react-icons/fa";

interface Experience {
  poste: string;
  entreprise: string;
}

interface Competence {
  nom: string;
  correspondance: number;
}

interface AnalyseResultProps {
  candidat: {
    nom: string;
    poste: string;
    profil: string;
    score: number;
    pertinence: string;
    competences: Competence[];
    experiences: Experience[];
  };
}

const AnalyseResult: React.FC<AnalyseResultProps> = ({ candidat }) => {
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
        <div className="flex items-center gap-3">
          <FaUser className="text-blue-gray-700 text-2xl" />
          <div>
            <Typography variant="h6" color="blue-gray">
              {candidat.nom}
            </Typography>
            <Typography variant="small" color="gray">
              {candidat.poste}
            </Typography>
          </div>
        </div>

        {/* Profil */}
        <div className="mt-2">
          <Typography variant="small" color="gray" className="mb-1">
            Profil
          </Typography>
          <Typography variant="paragraph" color="blue-gray">
            {candidat.profil}
          </Typography>
        </div>

        {/* Score global */}
        <div className="mt-2">
          <Typography variant="small" color="gray" className="mb-1">
            Score global
          </Typography>
          <Progress value={candidat.score} color="green" className="h-3 mb-1" />
          <Typography variant="small" color="blue-gray">
            {candidat.score}%
          </Typography>
        </div>

        {/* Pertinence */}
        <div className="mt-4 flex items-center gap-2">
          <FaBriefcase className="text-blue-gray-700 text-lg" />
          <Typography variant="small" color="blue-gray">
            Pertinence pour le poste :{" "}
            <span className="font-semibold text-green-700">
              {candidat.pertinence}
            </span>
          </Typography>
        </div>

        {/* Compétences */}
        <div className="mt-4">
          <Typography variant="small" color="gray" className="mb-2">
            Compétences correspondantes
          </Typography>
          <div className="space-y-2">
            {candidat.competences.map((comp, index) => (
              <div key={index} className="flex items-center justify-between">
                <Typography variant="small" color="blue-gray">
                  {comp.nom}
                </Typography>
                <Progress
                  value={comp.correspondance}
                  color="blue"
                  className="h-2 w-2/3"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Expériences */}
        <div className="mt-6">
          <Typography variant="small" color="gray" className="mb-2">
            Expériences professionnelles
          </Typography>
          <div className="space-y-2">
            {candidat.experiences.map((exp, index) => (
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
      </CardBody>
    </Card>
  );
};

export default AnalyseResult;
