import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import OffreLayout from "./components/admin/OffreLayout";
import CandidaturePages from "./components/admin/CandidaturePages";
import { LoginCard } from "./components/Authentification/Login";
import AnalyseLayout from "./components/admin/AnalyseLayout";
import PostPages from "./components/admin/PostPages";

const root = createBrowserRouter([
  {
    path: "/",
    element: <LoginCard/>,
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
        element: <PostPages/>,
      },
    ],
  },
]);

export default root;
