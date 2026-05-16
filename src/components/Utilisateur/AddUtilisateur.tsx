import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useCallback, useContext, useMemo, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import { InputTag } from "..";
import { CreateUtilisateur } from "../API/Donnees/Utilisateur";
import AuthContext from "../Hooks/Authentification.context";

export default function AddUtilisateur({
  open,
  handleChange,
}: {
  open: boolean;
  handleChange: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [confMdp, setConfMdp] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState<string[]>([]);
  const [loader, setLoader] = useState(false);
  const [showMdp, setShowMdp] = useState("password");

  const { data, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    const Utilisateur = {
      name: name,
      email: email,
      password: mdp,
      contacts: contact,
      role: role,
      entreprise_id: data.entreprise && data.entreprise.id,
      password_confirmation: confMdp,
    };

    CreateUtilisateur(Utilisateur)
      .then((res) => {
        if (res) dispatch({ type: "ADD_USER", payload: { utilisateur: res } });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
        handleChange();
      });
  };

  const handleVerification = useMemo(() => passwordSecuity(mdp), [mdp]);
  const ConfirmPassword = useMemo(() => {
    return ConfirmationPassword(confMdp, mdp);
  }, [confMdp, mdp]);

  const handleSwitchType = useCallback(
    () => setShowMdp((cur) => (cur === "password" ? "text" : "password")),
    []
  );

  return (
    <Dialog size="lg" open={open} handler={handleChange}>
      <DialogHeader className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="w-full min-h-[35px] flex items-center gap-2">
            <IoBagRemove size={35} />
            <Typography
              variant="h5"
              className="text-[18px] h-[18px] font-bold uppercase "
            >
              Ajouter un utilisateur
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="text-[14px] ml-2">
            Cette fenêtre vous permet d'ajouter un nouveau utilisateur.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          size="sm"
          onClick={handleChange}
          className="!absolute right-2.5 top-2.5"
        >
          <IoIosClose className="h-5 w-5" />
        </IconButton>
      </DialogHeader>
      <form action="" onSubmit={handleSubmit}>
        <DialogBody className="space-y-4 overflow-hidden">
          <div className="overflow-auto border-t border-gray-200 pt-2 max-h-[70vh] pr-2">
            <div className="w-full flex flex-row md:flex-col gap-4 over">
              <div className="w-full flex flex-col  gap-2 mt-4 md:col-span-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 text-[14px] font-semibold uppercase"
                >
                  Création de d'utilisateur
                </Typography>
                <div className="w-full flex gap-2">
                  <Input
                    type="text"
                    label="Nom"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="text"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center gap-4">
                <div className="w-1/2">
                  <Select
                    id="type"
                    value={role}
                    label="Role de l'utilisateur"
                    onChange={(val) => val !== undefined && setRole(val)}
                  >
                    <Option value="default" disabled>
                      -- Sélectionner --
                    </Option>
                    <Option value="manager">Manager</Option>
                    <Option value="recruteur">Recruteur</Option>
                  </Select>
                </div>
                <div className="w-full">
                  <InputTag
                    placeholder="Saisir le ou les contacts...."
                    critere={contact}
                    setCritere={setContact}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row items-start gap-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <div className="w-full flex flex-col gap-6 relative">
                    <div className="relative w-full">
                      <Input
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
                  <div className="w-1/2 flex flex-col gap-6 relative">
                    <div className="relative w-full">
                      <Input
                        type="password"
                        value={confMdp}
                        onChange={(e) => setConfMdp(e.target.value)}
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
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            className="mr-1 flex items-center justify-center gap-2"
            type="submit"
          >
            {loader && <Spinner className="h-4 w-4" />}
            <Typography variant="small" className="text-[12px] font-semibold">
              Ajouter
            </Typography>
          </Button>
          <Button variant="text" color="red" onClick={handleChange}>
            <span>Annuler</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
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
