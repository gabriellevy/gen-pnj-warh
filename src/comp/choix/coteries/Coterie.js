import '../../../styles/Coterie.css'
import { getRandomInt } from '../../../utils/rand'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'

function Coterie({
  titre,
  portrait,
  fonds,
  description,
  page,
  voies,
  modifs_caracs,
  modifs_comps,
  objets,
}) {
  const { perso, setPerso } = useContext(PersoContexte)

  /**
   * application de tous les changements lors de la sélection d'une coterie
   */
  function appliquerSelection() {
    var fond = fonds[getRandomInt(fonds.length)]

    var changementsAuPerso = {
      fond: fond,
      coterie: titre, // titre de coterie
      rafraichir_coterie: 1,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  var selection = perso.coterie === titre

  return (
    <li
      className={selection ? 'lstCoteries_li_selection' : 'lstCoteries_li'}
      id={titre}
      onClick={() => appliquerSelection()}
    >
      <img
        className="lstCoteries_img"
        src={portrait}
        alt={`${titre} portrait`}
      />
      <div>
        <button
          className={selection ? 'boutonCoterie_selection' : 'boutonCoterie'}
        >
          {titre}
        </button>
      </div>
    </li>
  )
}

export default Coterie
