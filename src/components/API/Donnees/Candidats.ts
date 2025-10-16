import axios from "axios";
import { DataCandidat } from "./type";

const CreateCandidat = async (data: DataCandidat) => {
  try {
    const Data = new FormData();
    if (data.file) Data.append("file", data.file);
    if (data.offre) Data.append("offre", data.offre);
    await axios
      .post(`/api/admin/candidat/file/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.log(error);
  }
};

// const EditOffreCandidat = async (id) => {};

// const ChangeStatusCandidat = async (id, status) => {};

// const DeleteCandidat = async (id) => {};

export { CreateCandidat };
