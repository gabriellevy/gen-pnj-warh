import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import styled from 'styled-components'
import { BoutonBascule } from '../App'
import { Grid } from '@mui/material'

const ButtonGroup = styled.div`
  display: flex;
`

function Sexe() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [maleVal, majMale] = useState(perso.male)

  function gererSexe(male) {
    var changementsAuPerso = {
      male: male,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
    majMale(male)
  }

  useEffect(() => {
    majMale(perso.male)
  }, [perso.male])

  return (
    <div>
      <ButtonGroup>
        <BoutonBascule active={maleVal} onClick={() => gererSexe(true)}>
          Homme
        </BoutonBascule>
        <BoutonBascule active={!maleVal} onClick={() => gererSexe(false)}>
          Femme
        </BoutonBascule>
      </ButtonGroup>
    </div>
  )
}
export default Sexe
