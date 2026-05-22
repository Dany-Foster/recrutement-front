import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import root from "./App.tsx";
import "./index.css";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/200.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/800.css";
import "@fontsource/roboto/900.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AlertPortal from "./components/AlertPortal.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AlertPortal>
      <RouterProvider router={root} future={{ v7_startTransition: true }} />
    </AlertPortal>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
