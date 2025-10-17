import axios from "axios";

const LOGOUT = async (id: string) => {
  try {
    await axios.get(`/api/admin/logout/${id}`).then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export { LOGOUT };
