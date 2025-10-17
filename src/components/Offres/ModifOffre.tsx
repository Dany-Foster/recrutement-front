import {
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import { InputTag } from "..";
import { criteres, Poste, Sections } from "../Hooks/type";
import { useData } from "../Hooks/useData";

export default function ModifOffre() {
  const [Exp, setExp] = useState<string[]>([]);
  const [Comp, setComp] = useState<string[]>([]);
  const [Lang, setLang] = useState<string[]>([]);
  const [Form, setForm] = useState<string[]>([]);
  const { data, selectOffre, setSelectOffre } = useData();

  useEffect(() => {
    if (selectOffre) {
      selectOffre.criteres &&
        selectOffre.criteres.forEach((crt: criteres) => {
          const section: Sections = crt.section;
          switch (section.section) {
            case "Expériences":
              setExp(crt.critere);
              break;
            case "Compétences":
              setComp(crt.critere);
              break;
            case "Langues":
              setLang(crt.critere);
              break;
            case "Formations":
              setForm(crt.critere);
              break;
            default:
              break;
          }
        });
    }
  }, []);

  useEffect(() => {
    const critereId =
      selectOffre?.criteres &&
      selectOffre.criteres.map((crt: criteres) => crt.id);
    const UpdateCriteres = [
      {
        section: { id: "1", section: "Expériences" },
        id: critereId?.[0],
        critere: Exp,
      },
      {
        section: { id: "2", section: "Formations" },
        id: critereId?.[2],
        critere: Form,
      },
      {
        section: { id: "3", section: "Compétences" },
        id: critereId?.[1],
        critere: Comp,
      },
      {
        section: { id: "4", section: "Langues" },
        id: critereId?.[3],
        critere: Lang,
      },
    ];

    if (selectOffre) {
      setSelectOffre({ ...selectOffre, criteres: UpdateCriteres });
    }
  }, [Exp, Comp, Lang, Form]);

  const handleChangePoste = useCallback(
    (id: string) => {
      const poste = data.poste.find((poste: Poste) => poste.id === id);
      if (poste) {
        setSelectOffre({ ...selectOffre, poste: poste });
      }
    },
    [data.poste, selectOffre]
  );

  return (
    <form action="" className=" border-gray-200 pt-4 max-h-[70vh] pr-2">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
        <div className="w-full flex flex-col  gap-2 mt-4 md:col-span-2">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 text-[14px] font-semibold uppercase"
          >
            Modification de l'offre d'emploi
          </Typography>
          <Input
            type="text"
            label="Titre de l'offre"
            id="titre"
            value={selectOffre !== null ? selectOffre.titre : ""}
            onChange={(e) =>
              setSelectOffre({ ...selectOffre, titre: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full">
          <Select
            id="type"
            value={selectOffre !== null ? selectOffre.contrat : ""}
            label="Type de contrat"
            onChange={(val) =>
              val !== undefined &&
              setSelectOffre({ ...selectOffre, contrat: val })
            }
          >
            <Option value="default" disabled>
              -- Sélectionner --
            </Option>
            <Option value="CDI">CDI</Option>
            <Option value="CDD">CDD</Option>
            <Option value="Stage">Stage</Option>
            <Option value="Alternance">Alternance</Option>
          </Select>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <Input
              type="date"
              id="deadline"
              label="Date limite de candidature"
              value={selectOffre !== null ? selectOffre.date_clot : ""}
              onChange={(e) =>
                setSelectOffre({ ...selectOffre, date_clot: e.target.value })
              }
              required
            />
          </div>
          <div className="w-1/2 flex items-center gap-2 relative">
            <Input
              type="number"
              label="Année Expérience"
              value={selectOffre !== null ? selectOffre.Annee_Exp : ""}
              onChange={(e) =>
                setSelectOffre({ ...selectOffre, Annee_Exp: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="w-full">
          <Select
            id="type"
            value={
              selectOffre !== null && selectOffre.poste
                ? selectOffre.poste.id
                : ""
            }
            label="Poste disponible"
            onChange={(val) =>
              val !== undefined && selectOffre?.poste && handleChangePoste(val)
            }
          >
            {data.poste.map((poste: Poste, index: number) => (
              <Option key={index} value={poste.id}>
                {poste.poste}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full">
          <Select
            id="timework"
            label="Type de travail"
            value={selectOffre !== null ? selectOffre.temps : ""}
            onChange={(val) =>
              val !== undefined &&
              setSelectOffre({ ...selectOffre, temps: val })
            }
          >
            <Option value="default" disabled>
              -- Sélectionner --
            </Option>
            <Option value="Temps partiel">Partiel</Option>
            <Option value="Temps plein">Temps plein</Option>
            <Option value="Freelance">Freelance</Option>
          </Select>
        </div>
        <div className="w-full md:col-span-2">
          <Textarea
            label="Description de l'offre"
            value={selectOffre !== null ? selectOffre.desc_ofr : ""}
            onChange={(e) =>
              setSelectOffre({ ...selectOffre, desc_ofr: e.target.value })
            }
            className=""
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col  gap-2 mt-4">
        <Typography
          variant="h1"
          color="blue-gray"
          className="text-[16px] font-semibold uppercase"
        >
          Critères de recherche
        </Typography>
        <div className="flex flex-col ">
          <InputTag
            placeholder="Saisir les critères d'expérience ici..."
            critere={Exp}
            setCritere={setExp}
          />
          <InputTag
            placeholder="Saisir les critères de compétence ici..."
            critere={Comp}
            setCritere={setComp}
          />
          <InputTag
            placeholder="Saisir les critères de formations ici..."
            critere={Form}
            setCritere={setForm}
          />
          <InputTag
            placeholder="Saisir les critères de langues ici..."
            critere={Lang}
            setCritere={setLang}
          />
        </div>
      </div>
    </form>
  );
}
