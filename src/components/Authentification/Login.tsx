import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Error = {
  email?: string;
  password?: string;
  message?: string;
};

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [error, setError] = useState<Error>({});
  const [loading, setLoading] = useState(false);
  const [showMdpConf, setShowMdpConf] = useState("password");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: mdp,
    };
    setLoading(true);
    await axios
      .post("api/login", data)
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("auth_id", res.data.data.id);
          localStorage.setItem("auth_name", res.data.data.name);
          localStorage.setItem("auth_mail", res.data.data.mail);
          localStorage.setItem("auth_role", res.data.data.role);
          localStorage.setItem(
            "auth_Entreprise",
            JSON.stringify(res.data.data.entreprise)
          );
          localStorage.setItem("auth_token", res.data.data.token);
        } else {
          console.log(res);
        }
        setLoading(false);
        navigate("/dashboard/Tableau-de-bord");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 422) {
          setError(err.response.data.errors);
          setLoading(false);
        } else if (err.response && err.response.status === 401) {
          setError({ message: err.response.data.error });
          setLoading(false);
        }
      });
  };

  const handleSwitchTypeConf = useCallback(
    () => setShowMdpConf((cur) => (cur === "password" ? "text" : "password")),
    []
  );

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const response = async () => {
      await axios.get("/api/admin/authenticate").then((res) => {
        if (res.status == 200 && token) {
          navigate("/dashboard/Tableau-de-bord");
        }
      });
    };

    if (token) {
      response();
    }
  }, []);

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
                  <Typography variant="small" className="text-red-500">
                    {error ? error.email : "&nbsp;"}
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
                  <Typography variant="small" className="text-red-500">
                    {error ? error.password : "&nbsp;"}
                  </Typography>
                )}
              </div>
              {error && (
                <Typography variant="small" className="text-red-500">
                  {error ? error.message : "&nbsp;"}
                </Typography>
              )}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              className="flex justify-center items-center gap-2"
              fullWidth
            >
              {loading && <Spinner className="h-4 w-4" />}
              <Typography variant="small" className="font-normal">
                Se connecter
              </Typography>
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
