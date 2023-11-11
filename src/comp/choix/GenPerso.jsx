import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { Bouton } from '../App'
import BoutonsRegions from './BoutonsRegions'
import { Box, Paper, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const styles = {
    paragraphe: {
        elevation: '5',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '5px',
        border: "1px solid #AAAAAA",
        borderRadius: "10px",
    }
}

function GenPerso() {
    const { perso, setPerso } = useContext(PersoContexte)

    function rafraichir() {
      var changementsAuPerso = {
          rafraichir: 1,
      }
      var persoFinal = { ...perso, ...changementsAuPerso }
      setPerso(persoFinal)
    }

  return (
      <div>
        <Paper sx={styles.paragraphe}>
            <Typography variant="h5">
                Nouveau personnage : 
                <Bouton onClick={() => rafraichir()}>
                    Aléatoire complet
                </Bouton>
            </Typography>
            <Typography variant="h6">
                Par région : 
            </Typography>
            <BoutonsRegions />
        </Paper>
    </div>
  )
}
export default GenPerso
