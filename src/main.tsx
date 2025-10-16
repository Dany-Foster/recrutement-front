import ReactDOM from "react-dom/client";
import root from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/200.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/800.css";
import "@fontsource/roboto/900.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={root} future={{ v7_startTransition: true }} />
);
