import { Toast } from "@base-ui/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useLogin } from "../Hooks/useAuth";
import { useAuthStore, useErrorManagement } from "../store/useAuthStore";

type Error = {
  email?: string;
  password?: string;
};

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [error, setError] = useState<Error>({});
  const [showMdpConf, setShowMdpConf] = useState("password");
  const { mutate: loginSubmit, isPending, isError } = useLogin();
  const err = useErrorManagement((s) => s.err);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const toastManager = Toast.useToastManager();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !mdp) {
      setError({
        email: !email ? "Email est requis" : undefined,
        password: !mdp ? "Mot de passe est requis" : undefined,
      });
      return;
    }
    loginSubmit({ mail: email, password: mdp });
  };

  const handleSwitchTypeConf = useCallback(
    () => setShowMdpConf((cur) => (cur === "password" ? "text" : "password")),
    [],
  );

  useEffect(() => {
    if (isError) {
      toastManager.add({
        title: "Erreur de connexion",
        description: err,
      });
      setMdp("");
    }
  }, [isError, err]);

  useEffect(() => {
    if (isAuthenticated) {
      toastManager.add({
        title: "Connexion réussie",
        description: "Vous êtes connecté avec succès.",
      });
      navigate("/dashboard/Tableau-de-bord");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-[400px]">
        <form action="" onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-6">
            <div className="w-full flex flex-col items-center gap-4">
              <img
                src="/logo.jpg"
                alt="logo"
                width={50}
                height={50}
                className="rounded-xl"
              />
              <div className="flex flex-col items-center gap-1">
                <Typography variant="h2" className="text-[30px] font-normal">
                  Connexion
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-[14px] font-normal"
                >
                  Veuillez remplir les champs demandés
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  error={error.email ? true : false}
                />
                {error && (
                  <Typography
                    variant="small"
                    className={cn(
                      "text-red-500",
                      error.email ? "block" : "hidden",
                    )}
                  >
                    {error.email || "Email est requis"}
                  </Typography>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-full relative">
                  <Input
                    label="Mot de passe"
                    type={showMdpConf}
                    value={mdp}
                    onChange={(e) => setMdp(e.target.value)}
                    size="lg"
                    error={error.password ? true : false}
                  />
                  {showMdpConf === "text" ? (
                    <FaEye
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={handleSwitchTypeConf}
                    />
                  ) : (
                    <FaEyeSlash
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={handleSwitchTypeConf}
                    />
                  )}
                </div>
                {error && (
                  <Typography
                    variant="small"
                    className={cn(
                      "text-red-500",
                      error.password ? "block" : "hidden",
                    )}
                  >
                    {error.password || "Mot de passe est requis"}
                  </Typography>
                )}
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              className="flex justify-center items-center gap-2"
              fullWidth
              disabled={isPending}
            >
              {isPending ? (
                <Typography
                  variant="small"
                  className="font-normal flex justify-between items-center gap-4"
                >
                  <Spinner className="h-4 w-4" /> connexion....
                </Typography>
              ) : (
                <Typography variant="small" className="font-normal">
                  Se connecter
                </Typography>
              )}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Vous n'avez pas de compte?
              <Typography
                as="a"
                href="/inscription"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                S'inscrire
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
