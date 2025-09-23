import {  Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { InputTag, OffreTable } from "..";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";

const OffreLayout = () => {
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen(!open);
  return (
    <div className="w-full px-4 mt-2">
      <div className="w-full mb-4">
        <Typography variant="h3" className="text-[20px] font-bold uppercase">
          Offres d'emplois
        </Typography>
        <Typography variant="small" color="blue-gray" className="pl-2">Vous pouvez consulter et ajouter un offre d'emploi</Typography>
      </div>
      <OffreTable actionOpen={handleChange} />
      <AddOffre open={open} handleChange={handleChange} />
    </div>
  )
};

export function AddOffre({open, handleChange}: {open: boolean, handleChange: () => void}) {
  const [contrat, setContrat] = useState("default");
  const [typeTr, setTypeTr] = useState("default");
  const [poste, setPoste] = useState("default");
  const [titre, setTitre] = useState("");
  const [lieu, setLieu] = useState("");
  const [date_limite, setDate_limite] = useState("");
  const [description, setDescription] = useState("");

  const [critereExp, setCritereExp] = useState<string[]>([]);
  const [critereComp, setCritereComp] = useState<string[]>([]);
  const [critereForm, setCritereForm] = useState<string[]>([]);
  const [critereLang, setCritereLang] = useState<string[]>([]);
  const [entreprise] = useState({
    nom: "Tech Solutions",
    adresse: "123 Rue de l'Innovation, Paris",
    email: "V7i3d@example.com",
    contact: "+33 1 23 45 67 89",
  });

  return (
    <Dialog size="lg" open={open} handler={handleChange}>
      <DialogHeader className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="w-full min-h-[35px] flex items-center gap-2">
            <IoBagRemove size={35}/>
            <Typography variant="h5" className="text-[18px] h-[18px] font-bold uppercase ">
              Ajouter une offre d'emploi
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Cette fenêtre vous permet d'ajouter une nouvelle offre d'emploi.
          </Typography>
        </div>
        <IconButton variant="text" color="blue-gray" size="sm" onClick={handleChange} className="!absolute right-2.5 top-2.5">
          <IoIosClose className="h-5 w-5"/>
        </IconButton>

      </DialogHeader>
      <DialogBody className="space-y-4 overflow-hidden">
        <form action="" className="overflow-auto border-t border-gray-200 pt-2 max-h-[70vh] pr-2">
          <Typography variant="h1" color="blue-gray" className="mb-2 text-[16px] font-bold uppercase">Informations de l'entreprise</Typography>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
            {/* Entreprise */}
            <div className="w-full">
              <Input type="text" value={entreprise.nom} disabled />
            </div>
            <div className="w-full">
              <Input type="text"  value={entreprise.adresse} disabled />
            </div>
            <div className="w-full">
              <Input type="text"  value={entreprise.email} disabled />
            </div>
            <div className="w-full">
              <Input type="text" value={entreprise.contact} disabled />
            </div>
            <div className="w-full flex flex-col  gap-2 mt-4 md:col-span-2">
              <Typography variant="h6" color="blue-gray" className="mb-2 text-[14px] font-semibold uppercase">Création de l'offre d'emploi</Typography>
              <Input type="text" label="Titre de l'offre" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} required />
            </div>
            <div className="w-full">
              <Select id="type" value={contrat} label="Type de contrat" onChange={(val) => val !== undefined && setContrat(val)}>
                <Option value="default" disabled>-- Sélectionner --</Option>
                <Option value="CDI">CDI</Option>
                <Option value="CDD">CDD</Option>
                <Option value="Stage">Stage</Option>
                <Option value="Alternance">Alternance</Option>
              </Select>
            </div>
            <div className="w-full">
              <Input type="text" label="Lieu de travail" value={lieu} onChange={(e) => setLieu(e.target.value)} required />
            </div>
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <Input type="date" id="deadline" label="Date limite de candidature" value={date_limite} onChange={(e) => setDate_limite(e.target.value)}  required />
              </div>
              <div className="w-1/2 flex items-center gap-2 relative">
                <Input type="number" label="Année Expérience" required />
              </div>
            </div>
            <div className="w-full">
              <Select id="type" value={poste} label="Poste disponible" onChange={(val) => val !== undefined && setPoste(val)}>
                <Option value="default" disabled>-- Sélectionner --</Option>
                <Option value="1">Développeur</Option>
                <Option value="2">Manager professionnel</Option>
                <Option value="3">Stage en administrateur</Option>
                <Button size="sm" className="my-2">Ajouter</Button>
              </Select>
            </div>
            <div className="w-full">
              <Select id="timework" label="Type de travail" value={typeTr} onChange={(val) => val !== undefined && setTypeTr(val)}>
                <Option value="default" disabled>-- Sélectionner --</Option>
                <Option value="P">Partiel</Option>
                <Option value="TP">Temps plein</Option>
              </Select>
            </div>
            <div className="w-full md:col-span-2">
              <Textarea label="Description de l'offre" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
          </div>
          <div className="w-full flex flex-col  gap-2 mt-4">
            <Typography variant="h1" color="blue-gray" className="text-[16px] font-semibold uppercase">Critères de recherche</Typography>
            <div className="flex flex-col ">
              <InputTag placeholder="Saisir les critères d'expérience ici..."  critere={critereExp} setCritere={setCritereExp}/>
              <InputTag placeholder="Saisir les critères de compétence ici..." critere={critereComp} setCritere={setCritereComp}/>
              <InputTag placeholder="Saisir les critères de formations ici..." critere={critereForm} setCritere={setCritereForm}/>
              <InputTag placeholder="Saisir les critères de langues ici..." critere={critereLang} setCritere={setCritereLang}/>
            </div>
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button className="mr-1">
          <span>Ajouter</span>
        </Button>
        <Button variant="text" color="red" onClick={handleChange}>
          <span>Annuler</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}



export default OffreLayout;
