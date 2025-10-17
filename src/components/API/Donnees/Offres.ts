import axios from "axios";
import { DataOffre } from "./type";

type Error = {
  message: string;
};

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

const DeleteOffre = async (
  id: string
): Promise<boolean | string[] | unknown> => {
  try {
    await axios.delete(`/api/admin/offres/${id}`).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        return true;
      }
    });
  } catch (error: Error | unknown) {
    return error;
  }
};

export { CreateOffre, DeleteOffre, UpdateOffre };
