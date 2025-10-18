import axios from "axios";
import { DataCandidat } from "./type";

const CreateCandidat = async (data: DataCandidat) => {
  try {
    const Data = new FormData();
    if (data.file) Data.append("file", data.file);
    if (data.offre_id) Data.append("offre", data.offre_id);
    await axios
      .post(`/api/admin/candidat/file/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          return res.data.data;
        }
      });
  } catch (error) {
    console.log(error);
  }
};

// const EditOffreCandidat = async (id) => {};

// const ChangeStatusCandidat = async (id, status) => {};

// const DeleteCandidat = async (id) => {};

export { CreateCandidat };
