import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { Bouton } from '../App'
import Fonctionnalites from './Fonctionnalites'
import BoutonsRegions from './BoutonsRegions'
import { Box, Paper, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const styles = {
    paragraphe: {
        elevation: '3',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '5px 15px 5px 15px',
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
        <Box sx={styles.paragraphe}>
            <Typography variant="h4">
                Nouveau personnage : 
                <Bouton onClick={() => rafraichir()}>
                    Aléatoire complet
                </Bouton>
            </Typography>
            <Typography variant="h6">
                Par région : 
            </Typography>
            <BoutonsRegions />
        </Box>
    </div>
  )
}
export default GenPerso
