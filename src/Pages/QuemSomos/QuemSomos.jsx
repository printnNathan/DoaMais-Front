import React from 'react';
import Home from './components/Home';
import QuemSomos from './components/QuemSomos';
import styles from  './QuemSomos.module.css';
import NavBar from '../../components/NavBar/Header';
import { Link } from 'react-router-dom';

export default QuemSomos(); {
    return(
        <div>
            <NavBar/>

            <div><h1 className={styles.Texto1}>Quem Somos</h1></div>
            <div><h1 className={styles.Texto2}>Abrale - Associação Brasileira de Linfoma e Leucemia</h1></div>

            <input
             type="text"
             value={texto}
             onChange={handleChange}
             placeholder="Digite a Biografia..." 
            />
            <p>{texto}</p>

            <div className="quem-somos-container">              
                <img src="https://abrale.org.br/wp-content/uploads/2020/10/logo-abrale.png"
                 alt=""//Descrição da imagem
                 className="img1"
                />
            </div>

        </div>
    )
}