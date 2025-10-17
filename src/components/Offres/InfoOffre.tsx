import { Chip, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { criteres, Sections } from "../Hooks/type";
import { useData } from "../Hooks/useData";
export default function InfoOffre() {
  const [Exp, setExp] = useState<string[]>([]);
  const [Comp, setComp] = useState<string[]>([]);
  const [Lang, setLang] = useState<string[]>([]);
  const [Form, setForm] = useState<string[]>([]);
  const { selectOffre } = useData();

  useEffect(() => {
    selectOffre?.criteres &&
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
  }, [selectOffre]);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-2">
      <Typography
        variant="h2"
        color="blue-gray"
        className="text-[25px] h-[18px] font-bold uppercase "
      >
        {selectOffre?.titre}
      </Typography>
      <div className="w-full flex items-start justify-arround gap-2 ml-4">
        <Typography
          variant="small"
          color="black"
          className="text-[14px] mt-2 flex items-center justify-center gap-2"
        >
          <strong>Type de contrat</strong> - {selectOffre?.contrat} |
          <Chip value={selectOffre?.temps} size="sm" />
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="text-[14px] mt-2 flex items-center  justify-between gap-2"
        >
          <span className="text-[14px] font-bold text-blue-gray-900">
            Localisation :
          </span>{" "}
          Madagascar, Antananarivo
          <Typography
            variant="small"
            color="black"
            className="text-[14px] font-bold text-black"
          >
            Date Limite:{" "}
          </Typography>
          <span className="text-[12px] font-semibold text-blue-gray-600">
            {selectOffre?.date_clot}
          </span>
          {selectOffre?.date_pub && (
            <div className="">
              <Typography
                variant="small"
                color="black"
                className="text-[14px] font-bold text-black"
              >
                Date de publication:
              </Typography>
              <span className="text-[12px] font-semibold text-blue-gray-600">
                {selectOffre?.date_pub}
              </span>
            </div>
          )}
        </Typography>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start gap-4 p-4 border-t border-gray-200">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Description de l'offre
          </Typography>
        </div>
        <Typography
          variant="small"
          color="black"
          className="text-[14px] text-justify ml-4"
        >
          {selectOffre?.desc_ofr}
        </Typography>

        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Compétences requises
          </Typography>
        </div>
        <div className="w-full flex ml-2 flex-wrap gap-2">
          {Comp.map((crt) => (
            <Chip key={crt} value={crt} size="sm" />
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Expériences requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          {Exp.map((crt) => (
            <Typography
              key={crt}
              variant="small"
              color="gray"
              className="text-[14px] ml-2"
            >
              {crt}
            </Typography>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Formations requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          {Form.map((crt) => (
            <Typography
              key={crt}
              variant="small"
              color="gray"
              className="text-[14px] ml-2"
            >
              {crt}
            </Typography>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[14px] font-bold uppercase "
          >
            Langues requises
          </Typography>
        </div>
        <div className="w-full flex flex-col  items-start  gap-2">
          {Lang.map((crt) => (
            <Typography
              key={crt}
              variant="small"
              color="gray"
              className="text-[14px] ml-2"
            >
              {crt}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}
