import { Box, Grid, Input, Paper, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Coteries from './Coteries'
import Sexe from './Sexe'
import ChoixClasse from './ChoixClasse';
import { useContext, useEffect, useState } from 'react';
import { PersoContexte } from '../../utils/contexte/perso';
import { TextField } from '@mui/material';

const styles = {
  paragraphe: {
      elevation: '5',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      padding: '5px 5px 5px 5px',
      border: "1px solid #AAAAAA",
      borderRadius: "10px",
  },
  saisieAge: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: "3px",
    border: "1px solid #AAAAAA",
    width: '30px',
    height: '18px',
    padding: '0px',
  },
  ligne: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  age: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
}

function EditPerso() {
    const { perso, setPerso } = useContext(PersoContexte)
    const [age, majAge] = useState(perso.age)

    function gererAge(e) {
      majAge(e.target.value)
  
      var changementsAuPerso = {
        age: e.target.value,
      }
      var persoFinal = { ...perso, ...changementsAuPerso }
      setPerso(persoFinal)
    }
  
    useEffect(() => {
      majAge(perso.age)
    }, [perso.age])

  return (
      <div>
        <Paper sx={styles.paragraphe}>
          <Typography variant="h5">
              Éditer le personnage : 
          </Typography>
          <Coteries />
          <Box sx={styles.ligne}>
            <Box sx={styles.age}>
              <Typography variant="body1">
                  Âge : 
              </Typography>
              <Input
                sx={ styles.saisieAge }
                type="text"
                id="age"
                maxLength={3}
                pattern="[+-]?\d+(?:[.,]\d+)?"
                placeholder="Âge du perso"
                onChange={gererAge}
                value={age}
              />
              <Typography variant="body1">
                ans
              </Typography>
            </Box>
            <Sexe />
          </Box>
          <ChoixClasse />
        </Paper>
    </div>
  )
}
export default EditPerso
