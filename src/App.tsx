import { createBrowserRouter } from "react-router-dom";

import axios from "axios";
import AdminLayout from "./components/admin/AdminLayout";
import AnalyseLayout from "./components/admin/AnalyseLayout";
import CandidaturePages from "./components/admin/CandidaturePages";
import Dashboard from "./components/admin/Dashboard";
import EntretienPages from "./components/admin/EntretienPages";
import OffreLayout from "./components/admin/OffreLayout";
import LoginCard from "./components/Authentification/Login";
import PrivateRoute from "./components/Authentification/PrivateRoute";
import Register from "./components/Authentification/Register";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
const root = createBrowserRouter([
  {
    path: "/",
    element: <LoginCard />,
  },
  {
    path: "/inscription",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
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
        element: <AnalyseLayout />,
      },
      {
        path: "entretiens",
        element: <EntretienPages />,
      },
      // {
      //   path: "utilisateurs",
      //   element: <UtilisateurPage />,
      // },
    ],
  },
]);

export default root;
