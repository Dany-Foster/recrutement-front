import axios from "axios";
import { utilisateur } from "../../Hooks/type";
import { DataUtilisateur } from "./type";

const CreateUtilisateur = async (
  data: DataUtilisateur
): Promise<utilisateur | undefined> => {
  try {
    await axios.post("/api/admin/utilisateur", data).then((res) => {
      if (res.status == 200) {
        return res.data.data;
      }
    });
  } catch (error) {
    return error;
  }
};

export { CreateUtilisateur };
