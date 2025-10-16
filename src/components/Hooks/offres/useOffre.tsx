import { createContext } from "react";
// import { Offres } from "../type";

// interface Offre {
//   Offre: Offres,
//   setOffre: React.Dispatch<React.SetStateAction<Offres>>
// }

const OffreContext = createContext({
  offre: {},
  handleChange: () => {},
});

function OffreProvider({ children }: { children: React.ReactNode }) {
  const [offre, setOffre] = React.useState({});

  const handleChange = () => {};

  return (
    <OffreContext.Provider value={{ offre }}>{children}</OffreContext.Provider>
  );
}

export { OffreProvider };

export default function useOffre() {
  const context = React.useContext(OffreContext);
  if (context === undefined) {
    throw new Error("useOffre must be used within a OffreProvider");
  }
  return context;
}
