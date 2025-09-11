import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
export function LoginCard() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Connexion
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" />
          <Input label="Mot de passe" type="password" value={mdp} onChange={(e) => setMdp(e.target.value)} size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Se connecter
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Vous n'avez pas de compte?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              S'inscrire
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}