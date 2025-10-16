import axios from "axios";

const Authentification = async () => {
  try {
    await axios.get("/api/admin/authenticate").then((res) => {
      if (res.status == 200) {
        return true;
      } else if (res.status == 401) {
        return false;
      } else if (res.status == 404) {
        return false;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export { Authentification };
