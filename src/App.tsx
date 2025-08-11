import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/dashboard";
import OffreLayout from "./components/admin/OffreLayout";



const root = createBrowserRouter([
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "Tableau-de-bord",
        element: <Dashboard/>,
      },
      {
        path: "candidats",
        element: <div>Candidats</div>,
      },
      {
        path: "offres",
        element: <OffreLayout/>,
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
])


export default root


