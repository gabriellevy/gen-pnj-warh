import { getRandomInt } from '../../utils/rand'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import styled from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
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
  const sexes = [true, false]
  const [active, setActive] = useState(sexes[0])

  function gererSexe(male) {
    var changementsAuPerso = {
      male: male,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
    majMale(male)
  }

  return (
    <div style={{ padding: '5px 15px 5px 15px' }}>
      <ButtonGroup>
        {sexes.map((male) => (
          <ButtonToggle
            key={male}
            active={active === (male === maleVal)}
            onClick={() => gererSexe(male)}
          >
            {male ? 'Homme' : 'Femme'}
          </ButtonToggle>
        ))}
      </ButtonGroup>
    </div>
  )
}
export default Sexe
