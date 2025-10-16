import axios from "axios";

const Get_Data = async () => {
  try {
    const res = await axios.get("/api/admin/prechargement");
    if (res.status === 200) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    return error;
  }
};

export default Get_Data;
