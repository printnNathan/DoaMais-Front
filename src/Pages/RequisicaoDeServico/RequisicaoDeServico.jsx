import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Requisicaodeservico.module.css';
import Esferas from "../../components/Esferas/Esferas";
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';


const RequisicaoDeServico = () => {


    return(
        <div>
            <NavBar />

            <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
            <form className={styles.form}>
                <div className={styles.CardEmail}>
                    <span className={styles.font1}>TÍTULO:</span>
                    <input type="text" name="usuario" placeholder="CONSERTO DE ENCANAMENTO" className={styles.Apelido} />
                </div>
                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>DESCRIÇÃO</span>
                    <input type="text" name="Senha" placeholder="SERVIÇO DOMÉSTICO" className={styles.Apelido2} />
                </div> 
              
                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>LOCALIZAÇÃO</span>
                    <input type="text" name="Senha" placeholder="CEP" className={styles.Apelido} />
                </div> 
                <div className={styles.Cardapelido}>
                    <h5 className={styles.font1}>CONTATO</h5>
                    <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/15/15407.png' alt="Telefone" width={30} height={30} />
                    <span className={styles.font1}>(11)9914423541</span>
                </div>
            </form>

                <div className={styles.Foto}>
                    <button>Fotos</button>
                    <p></p>
                <Link to="/Anuncios">
                    <button>Concluir</button> 
                </Link>          
                </div>               
          <Esferas />      
          <Footer/>

        </div>
        
    )
}
export default RequisicaoDeServico;
