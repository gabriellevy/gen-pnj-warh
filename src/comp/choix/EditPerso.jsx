import { Paper, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Coteries from './Coteries'
import Sexe from './Sexe'
import ChoixClasse from './ChoixClasse';
import { useContext, useEffect, useState } from 'react';
import { PersoContexte } from '../../utils/contexte/perso';


const styles = {
    paragraphe: {
        elevation: '5',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '5px 5px 5px 5px',
        border: "1px solid #AAAAAA",
        borderRadius: "10px",
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
            <form>
                <div>
                    Âge :
                    <input
                        type="text"
                        id="age"
                        maxLength={3}
                        pattern="[+-]?\d+(?:[.,]\d+)?"
                        placeholder="Âge du perso"
                        onChange={gererAge}
                        value={age}
                      />
                </div>
                <div>
                    <ChoixClasse />
                </div>
            </form>
            <Sexe />
        </Paper>
    </div>
  )
}
export default EditPerso
