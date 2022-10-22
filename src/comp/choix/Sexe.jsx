import { getRandomInt } from '../../utils/rand'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import styled from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 4px 30px;
  border-radius: 4px;
  margin: 5px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`
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
    <div style={{ padding: '5px 15px 5px 15px' }}>
      <ButtonGroup>
        <ButtonToggle active={maleVal} onClick={() => gererSexe(true)}>
          Homme
        </ButtonToggle>
        <ButtonToggle active={!maleVal} onClick={() => gererSexe(false)}>
          Femme
        </ButtonToggle>
      </ButtonGroup>
    </div>
  )
}
export default Sexe
