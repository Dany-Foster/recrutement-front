import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Chip,
  Progress,
  Typography,
} from "@material-tailwind/react";

export default function CandidatPostule() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-4 py-1 mt-4">
      <Typography
        variant="h2"
        color="blue-gray"
        className="text-[25px] h-[18px] font-bold uppercase "
      >
        Liste des candidats postulés
      </Typography>
      <Typography
        variant="small"
        color="gray"
        className="text-[14px] text-justify ml-4"
      >
        Vous pouvez consulter la liste des candidats ayant postulé à cette offre
        d'emploi ici.
      </Typography>
      <div className="w-full h-full flex flex-col gap-2">
        <Card
          color="transparent"
          shadow={true}
          className="w-full h-[100px] flex items-center border border-gray-200"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="w-full h-full px-4 pb-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                size="lg"
                alt="cand"
                className=" object-cover"
              />
              <div className="flex flex-col gap-1">
                <div className=" flex flex-col gap-1">
                  <Typography variant="h5" color="blue-gray">
                    Jean Dupont
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-[12px] w-[100px] font-semibold flex items-center gap-2"
                  >
                    Status:{" "}
                    <Chip
                      value="En attente"
                      color="orange"
                      size="sm"
                      className="text-[10px] text-white"
                    />
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-[10px]"
                  >
                    Postulé le: 2024-10-15 - il y a 5 jours
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <Typography variant="small" color="gray" className="text-[12px]">
                Score:{" "}
                <span className="font-bold text-blue-gray-900">50/100</span>
              </Typography>
              <Progress value={50} size="sm" className="" />
              <Button size="sm" className="w-full">
                Voir le profil
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
