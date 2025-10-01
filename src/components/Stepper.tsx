import { House, UserRoundPen } from "lucide-react";
import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
 
export function StepperWithIcon() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
 
  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <House className="h-5 w-5" />
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <UserRoundPen className="h-5 w-5" />
        </Step>
      </Stepper>

      {activeStep === 0 && 
      
        <>
            <div className="w-full flex flex-col gap-1 justify-start">
            <Typography variant="h6" className="text-[25px] font-semibold text-black">Entreprise</Typography>
                <Typography variant="small" color="gray" className="text-[14px] font-normal">Les informations concernant l'entreprise</Typography>
            </div>
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
                <div className="w-full flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Nom de l'entreprise
                    </Typography>
                    <Input
                    type="text"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}/>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Adresse
                    </Typography>
                    <Input
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}/>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Email
                    </Typography>
                    <Input
                    type="email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}/>
                </div>
            </div>
        </>
      
      
      }
      {activeStep === 1 && <div>Etape 2</div>}



      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Précédent
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          { isLastStep ? "S'inscrire" : "Suivant" }
        </Button>
      </div>
    </div>
  );
}