import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';
import EscolherCategoria from './Pages/EscolherCategoria/EscolherCategoria';
import MeusAnuncios from './Pages/MeusAnuncios/MeusAnuncios';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/",
      element: <MeusAnuncios />,
    },
    {
      path: "/EscolherCategoria",
      element: <EscolherCategoria />,
    },
    {
      path: "/Requisicao",
      element: <RequisicaoDeServico />,
    },
    {
      path: "/Perfil",
      element: <CadastrarUsuario />,
    }
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
