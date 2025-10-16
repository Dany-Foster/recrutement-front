import { createBrowserRouter } from "react-router-dom";

import axios from "axios";
import AdminLayout from "./components/admin/AdminLayout";
import AnalyseLayout from "./components/admin/AnalyseLayout";
import CandidaturePages from "./components/admin/CandidaturePages";
import Dashboard from "./components/admin/Dashboard";
import EntretienPages from "./components/admin/EntretienPages";
import OffreLayout from "./components/admin/OffreLayout";
import LoginCard from "./components/Authentification/Login";
import Register from "./components/Authentification/Register";
import { AuthentificationProvider } from "./components/Hooks/Authentification.context.tsx";

axios.defaults.baseURL = "http://127.0.0.1:8002/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

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
      <AuthentificationProvider>
        <AdminLayout />
      </AuthentificationProvider>
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
    ],
  },
]);

export default root;
