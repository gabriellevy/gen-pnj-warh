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

function Fonctionnalites() {
  const { perso, setPerso } = useContext(PersoContexte)

  function rafraichir() {
    var changementsAuPerso = {
        rafraichir: 1,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  function nouveauPortrait() {
    var changementsAuPerso = {
        autre_portrait: 1,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  return (
    <div style={{ padding: '5px 15px 5px 15px' }}>
        <Button onClick={() => rafraichir()}>
          Nouveau personnage
        </Button>
        <Button onClick={() => nouveauPortrait()}>
          Autre portrait
        </Button>
    </div>
  )
}
export default Fonctionnalites
