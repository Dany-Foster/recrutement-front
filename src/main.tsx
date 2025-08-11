import ReactDOM from 'react-dom/client'
import root from './App.tsx'
import './index.css'
import {RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={root} future={{v7_startTransition: true}}/>
);
