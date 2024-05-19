import NavBar from '../../components/NavBar/Header';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PublicadosPanel from './PublicadosPanel';
import InativosPanel from './InativosPanel';
import Styles from '../Anuncios/Anuncios.module.css';
import Esferas from  '../../components/Esferas/Esferas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

function Anuncios() {

  const [tabSelecionada, setTabSelecionada] = useState('1');

  const handleChange = (event, newValue) => {
    setTabSelecionada(newValue);
  };
  

  return (
    <div>
      <div className={Styles.TituloPrincipal}><h1>Meus Anúncios</h1></div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tabSelecionada}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={Styles.Painel}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Publicados" value="1" />
              <Tab label="Inativos" value="3" />
            </TabList>
          </Box>
          <Box sx={{ backgroundColor: "#d9d9d9", paddingLeft: "20%", paddingRight: "20%"  }} >

            <TabPanel value="1">
              <div className={Styles.anuncio}>
                <h1>Publicados
                <FontAwesomeIcon icon={faClock} />
                </h1>
              </div>
              <PublicadosPanel />
            </TabPanel>
            <TabPanel value="3">
              <div className={Styles.anuncio}>
                <h1>Inativo
                <FontAwesomeIcon icon={faMinusCircle} />
                </h1>
              </div>
              <InativosPanel />
            </TabPanel>

          </Box>
        </TabContext>
      </Box>
      <Esferas />
    </div>
  );
}

export default Anuncios;
