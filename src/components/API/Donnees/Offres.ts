import axios from "axios";
import { DataOffre } from "./type";

const CreateOffre = async (offre: DataOffre) => {
  try {
    await axios.post("/api/admin/offres", offre).then((res) => {
      if (res.status == 200) {
        return res.data;
      }
    });
  } catch (error) {
    return error;
  }
};

const UpdateOffre = async (offre: DataOffre, id: string) => {
  try {
    await axios.put(`/api/admin/offres/${id}`, offre).then((res) => {
      if (res.status == 200) {
        return res.data;
      }
    });
  } catch (error) {
    return error;
  }
};

export { CreateOffre, UpdateOffre };
