import { Typography } from "@material-tailwind/react";

const EntretienPages = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col gap-2 px-4 sm:px-2 lg:px-4 pt-4 w-full mb-2">
        <div className="flex flex-col gap-2">
          <Typography variant="h2" className="text-[16px] font-bold uppercase">
            Entretiens 
          </Typography>
          <Typography variant="small" className="text-[14px] font-normal ml-2">Vous pouvez consulter chaque entretien crée par le manager</Typography>
        </div>
        <section className="w-full">
          
        </section>
      </div>
    </main>
  )
};

export default EntretienPages;
