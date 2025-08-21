import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import OffreLayout from "./components/admin/OffreLayout";
import CandidaturePages from "./components/admin/CandidaturePages";

const root = createBrowserRouter([
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
        element: <div>Entretiens</div>,
      },
      {
        path: "postes",
        element: <div>Entretiens</div>,
      },
    ],
  },
]);

export default root;
