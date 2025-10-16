import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import CandidatCard from "./CandidatCard";

interface Candidat {
  id: number;
  nom: string;
  poste: string;
}

interface CandidatSelectionCardProps {
  onSelect?: (candidat: Candidat) => void;
}

const CandidatSelectionCard: React.FC<CandidatSelectionCardProps> = ({
  onSelect,
}) => {
  const [search, setSearch] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const candidats: Candidat[] = [
    { id: 1, nom: "Rakoto Fenitra", poste: "Développeur Web" },
    { id: 2, nom: "Andrianina Lova", poste: "Chef de projet" },
    { id: 3, nom: "Raharinirina Fara", poste: "Designer UI/UX" },
    { id: 4, nom: "Rasolo Tiana", poste: "Data Analyst" },
  ];

  const filtered = candidats.filter(
    (c) =>
      c.nom.toLowerCase().includes(search.toLowerCase()) ||
      c.poste.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: number) => {
    setSelectedId(id);
    const selectedCandidat = candidats.find((c) => c.id === id);
    if (selectedCandidat && onSelect) onSelect(selectedCandidat);
  };

  return (
    <Card className="w-full h-[450px] shadow-lg border border-gray-200 rounded-2xl">
      {/* Header */}
      <CardHeader
        floated={false}
        shadow={false}
        className="bg-gray-50 p-4 border-b"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="h6" color="blue-gray">
            Sélectionner un candidat
          </Typography>
          <div className="w-full md:w-1/2 relative">
            <CiSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
            <Input
              label="Rechercher..."
              crossOrigin={undefined} // nécessaire pour TS (bug Input)
              color="blue"
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>

      {/* Body */}
      <CardBody className="overflow-y-auto px-4 py-3">
        <div className="flex flex-col gap-3">
          {filtered.length > 0 ? (
            filtered.map((c) => (
              <div
                key={c.id}
                onClick={() => handleSelect(c.id)}
                className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedId === c.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <CandidatCard candidat={c} selected={selectedId === c.id} />
              </div>
            ))
          ) : (
            <Typography
              variant="small"
              color="gray"
              className="text-center italic py-10"
            >
              Aucun candidat trouvé.
            </Typography>
          )}
        </div>
      </CardBody>

      {/* Footer */}
      <CardFooter className="flex justify-end border-t bg-gray-50 py-4 px-6">
        <Button
          color={selectedId ? "blue" : "gray"}
          disabled={!selectedId}
          className="transition-all"
        >
          {selectedId ? "Planifier un entretien" : "Sélectionner un candidat"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CandidatSelectionCard;
