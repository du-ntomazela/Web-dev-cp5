import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Contato from "./pages/contato.jsx"
import Sobre from "./pages/sobre.jsx"
import Projetos from "./pages/Projetos.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/projetos",
        element: <Projetos />,
      },
    ] 
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
