import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import OffreLayout from "./components/admin/OffreLayout";
import CandidaturePages from "./components/admin/CandidaturePages";
import { LoginCard } from "./components/Authentification/Login";
import AnalyseLayout from "./components/admin/AnalyseLayout";
import EntretienPages from "./components/admin/EntretienPages";
import Register from "./components/Authentification/Register";

const root = createBrowserRouter([
  {
    path: "/connexion",
    element: <LoginCard/>,
  },
  {
    path: "/inscription",
    element: <Register/>
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "Tableau-de-bord",
        element: <Dashboard />,
      },
      {
        path: "candidats",
        element: <CandidaturePages />,
      },
      {
        path: "offres",
        element: <OffreLayout />,
      },
      {
        path: "analyses",
        element: <AnalyseLayout/>,
      },
      {
        path: "postes",
        element: <EntretienPages/>,
      },
    ],
  },
]);

export default root;
