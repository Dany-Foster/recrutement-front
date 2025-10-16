import axios from "axios";

interface Sections {
  // Define the properties of Section according to your API response
  id: string;
  section: string;
  // Add other fields as needed
}

const Get_Section = async () => {
  try {
    const res = await axios.get("/api/admin/sections");
    if (res.status === 200) {
      return res.data.data as Sections[];
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { Get_Section };
