import React from 'react';
import Footer from '../components/Footer/Footer';
import CadastrarUsuario from '../components/CadastrarUsuario/CadastrarUsuario';
import Navbar from '../components/NavBar/Header';

export default function CadastroDeUsuario () {
  return (
    <div>
        <Navbar/>
        <Footer/>
        <CadastrarUsuario/>
    </div>
  )
}