import {
  Button,
  Card,
  Input,
  Spinner,
  Step,
  Stepper,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { House, UserRoundPen } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { InputTag } from "..";

const Register = () => {
  const navigate = useNavigate();
  const [showMdp, setShowMdp] = useState("password");
  const inputmdpRef = useRef<HTMLInputElement>(null);
  const inputmdpConfRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState([]);
  {
    /* data Entreprise */
  }

  const handleChargePage = () => navigate("/dashboard/Tableau-de-bord");
  const [nomE, setNomE] = useState("");
  const [adr, setAdr] = useState("");
  const [emailE, setEmailE] = useState("");

  {
    /* data profil */
  }
  const [nomP, setNomP] = useState("");
  const [emailP, setEmailP] = useState("");
  const [mdp, setMdp] = useState("");
  const [mdpConf, setMdpConf] = useState("");
  const [contact, setContact] = useState<string[]>([]);

  //  const [data, dispatch] = useReducer(reducer, [

  // ])

  {
    /* Stepper */
  }
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8002/api/inscription", {
        name: nomP,
        EmailENT: emailE,
        nom: nomE,
        adr: adr,
        email: emailP,
        password: mdp,
        contacts: contact,
        password_confirmation: mdpConf,
      })
      .then((res) => {
        setNomE("");
        setAdr("");
        setEmailE("");
        setNomP("");
        setEmailP("");
        setMdp("");
        setMdpConf("");
        setContact([]);
        localStorage.setItem("auth_id", res.data.data.id);
        localStorage.setItem("auth_name", res.data.data.name);
        localStorage.setItem("auth_mail", res.data.data.mail);
        localStorage.setItem(
          "auth_Entreprise",
          JSON.stringify(res.data.data.entreprise)
        );
        localStorage.setItem("auth_token", res.data.data.token);
        setLoader(false);
        setActiveStep((cur) => cur + 1);
      })
      .catch((err) => {
        setLoader(false);
        setActiveStep((cur) => cur - 1);
        setError(err.response.message);
      });
  };

  const handleCLickSubmit = () => setLoader(!loader);

  const ShowInformationAction = useMemo(() => {
    return ChangingButton(
      activeStep,
      isLastStep,
      isFirstStep,
      setActiveStep,
      handleCLickSubmit,
      loader,
      handleChargePage
    );
  }, [activeStep, isLastStep, isFirstStep, loader]);

  const handleVerification = useMemo(() => passwordSecuity(mdp), [mdp]);
  const ConfirmPassword = useMemo(() => {
    return ConfirmationPassword(mdpConf, mdp);
  }, [mdpConf, mdp]);

  const handleSwitchType = useCallback(
    () => setShowMdp((cur) => (cur === "password" ? "text" : "password")),
    []
  );

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card
        color="transparent"
        shadow={false}
        className="w-[650px] flex flex-col justify-center items-center gap-4 px-4 md:px-2 lg:px-0"
      >
        <div className="w-full flex justify-center">
          <img
            src="/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-xl"
          />
        </div>
        <Typography
          variant="h3"
          color="black"
          className="text-[30px] font-semibold"
        >
          INSCRIPTION
        </Typography>
        <Typography color="gray" className="text-[18px] font-normal">
          Avez-vous déjà un compte ?{" "}
          <a href="/" className="text-black font-semibold">
            Se connecter
          </a>
        </Typography>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          {error && error}
        </div>
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step>
            <House className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center px-4 md:px-2 lg:px-0">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "gray" : "black"}
                className="text-[20px] font-semibold text-black"
              >
                Entreprise
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[14px] font-normal w-[150px]"
              >
                Les informations sur l'entreprise
              </Typography>
            </div>
          </Step>
          <Step>
            <UserRoundPen className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                className="text-[20px] font-semibold text-black"
              >
                Profil
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-[14px] font-normal w-[150px]"
              >
                Les informations sur le profil
              </Typography>
            </div>
          </Step>
          <Step>
            <UserRoundPen className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                className="text-[20px] font-semibold text-black"
              >
                Terminé
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="w-full flex justify-center items-center flex-col">
          <form
            action=""
            className="w-full flex flex-col gap-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* Entreprise */}
            {activeStep === 0 && (
              <div className="mt-24 h-[150px]">
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
                  <div className="w-full flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Entreprise
                    </Typography>
                    <Input
                      type="text"
                      value={nomE}
                      onChange={(e) => setNomE(e.target.value)}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Adresse
                    </Typography>
                    <Input
                      name="adr"
                      type="text"
                      value={adr}
                      onChange={(e) => setAdr(e.target.value)}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Email
                    </Typography>
                    <Input
                      value={emailE}
                      onChange={(e) => setEmailE(e.target.value)}
                      type="email"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Email
                    </Typography>
                    <InputTag
                      placeholder="Saisir le ou les contacts...."
                      critere={contact}
                      setCritere={setContact}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Profil */}
            {activeStep === 1 && (
              <div className="mt-24 h-[150px]">
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 over">
                  <div className="w-full flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Nom
                    </Typography>
                    <Input
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      type="text"
                      value={nomP}
                      onChange={(e) => setNomP(e.target.value)}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Email
                    </Typography>
                    <Input
                      type="email"
                      value={emailP}
                      onChange={(e) => setEmailP(e.target.value)}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-6 relative">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Mot de passe
                      </Typography>
                      <div className="relative w-full">
                        <Input
                          ref={inputmdpRef}
                          type={showMdp}
                          value={mdp}
                          onChange={(e) => setMdp(e.target.value)}
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        {showMdp === "text" ? (
                          <FaEye
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={handleSwitchType}
                          />
                        ) : (
                          <FaEyeSlash
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={handleSwitchType}
                          />
                        )}
                      </div>
                    </div>
                    {handleVerification}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-6 relative">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Confirmation du Mot de passe
                      </Typography>
                      <div className="relative w-full">
                        <Input
                          ref={inputmdpConfRef}
                          type="password"
                          value={mdpConf}
                          onChange={(e) => setMdpConf(e.target.value)}
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                    </div>
                    {ConfirmPassword}
                  </div>
                </div>
              </div>
            )}

            {/* Affichage de succès */}
            {activeStep === 2 && (
              <div className="w-full mt-24 flex flex-col gap-2">
                <Typography
                  variant="h3"
                  color="blue-gray"
                  className="font-semibold text-[30px]"
                >
                  Félicitations !
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-[14px] font-normal "
                >
                  Votre compte a bien été créé. Vous pouvez maintenant vous
                  connecter.
                </Typography>
                <Typography
                  variant="h3"
                  color="blue-gray"
                  className="font-semibold text-[18px]"
                >
                  Bon recrutement.
                </Typography>
              </div>
            )}

            <div className="mt-16 flex justify-between">
              {ShowInformationAction}
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;

function ChangingButton(
  activeStep: number,
  isLastStep: boolean,
  isFirstStep: boolean,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  handleCLickSubmit: () => void,
  loading: boolean,
  handleChargePage: () => void
) {
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);

  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  switch (activeStep) {
    case 0:
      return (
        <Button className="w-full" onClick={handleNext}>
          Suivant
        </Button>
      );
    case 1:
      return (
        <>
          <Button onClick={handlePrev}>Précédent</Button>
          <Button
            type="submit"
            className="flex gap-2"
            onClick={handleCLickSubmit}
          >
            {loading && <Spinner className="h-4 w-4" />}
            <Typography variant="small" className="font-normal">
              S'inscrire
            </Typography>
          </Button>
        </>
      );
    case 2:
      return (
        <Button className="w-full" onClick={handleChargePage}>
          Accéder au dashboard
        </Button>
      );
    default:
      return (
        <>
          <Button onClick={handlePrev}>Précédent</Button>
          <Button type="submit" className="flex gap-2">
            <Spinner className="h-4 w-4" />
            <Typography variant="small">S'inscrire</Typography>
          </Button>
        </>
      );
  }
}

function passwordSecuity(password: string) {
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.length === 0) {
    return (
      <div className="w-full">
        <Typography
          variant="small"
          color="gray"
          className="text-[12px] flex items-start gap-1 font-normal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-mt-px h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            Utilisez au moins 8 caractères, une majuscule, une minuscule et un
            chiffre.
          </span>
        </Typography>
      </div>
    );
  } else if (password.length >= 1 && password.length < 6) {
    return (
      <Typography
        variant="small"
        color="red"
        className="text-[12px] font-normal"
      >
        Mot de passe court
      </Typography>
    );
  } else if (password.length >= 6 && password.length < 8) {
    return (
      <Typography
        variant="small"
        color="orange"
        className="text-[12px] font-normal"
      >
        Mot de passe moyen
      </Typography>
    );
  } else if (password.length === 8) {
    if (strongRegex.test(password)) {
      return (
        <Typography
          variant="small"
          color="green"
          className="text-[12px] font-normal"
        >
          Mot de passe fort
        </Typography>
      );
    } else {
      return (
        <Typography
          variant="small"
          color="red"
          className="text-[12px] font-normal"
        >
          Mot de passe non conforme à la demande
        </Typography>
      );
    }
  } else {
    return (
      <Typography
        variant="small"
        color="red"
        className="text-[12px] font-normal"
      >
        Mot de passe dépassant les 8 caractères
      </Typography>
    );
  }
}

function ConfirmationPassword(Conf: string, mdp: string) {
  if (Conf.length && mdp.length) {
    if (!(Conf === mdp)) {
      return (
        <Typography
          variant="small"
          color="red"
          className="text-[12px] font-normal"
        >
          Mot de passe non identique
        </Typography>
      );
    }
  } else if (!mdp.length && Conf.length) {
    return (
      <Typography
        variant="small"
        color="red"
        className="text-[12px] font-normal"
      >
        Renseigner d'abord le mot de passe avant de confirmer
      </Typography>
    );
  }
}
