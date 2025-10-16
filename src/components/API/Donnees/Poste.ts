import axios from "axios";

interface Poste {
  poste: string | null;
  desc_post: string | null;
  user_id: string | null;
  entreprise_id: string | null;
}

const Add_Poste = async (data: Poste) => {
  try {
    const response = await axios.post("/api/admin/poste", data);
    if (response.status === 201) {
      return response.data.data;
    }
  } catch (error) {
    return error;
  }
};

export { Add_Poste };
