import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { Bouton } from '../App'

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
        <Bouton onClick={() => rafraichir()}>
          Aléatoire complet
        </Bouton>
        <Bouton onClick={() => nouveauPortrait()}>
          Autre portrait
        </Bouton>
    </div>
  )
}
export default Fonctionnalites
