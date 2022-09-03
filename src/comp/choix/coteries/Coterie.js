import '../../../styles/Coterie.css'
import { getRandomInt } from '../../../utils/rand'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'

function Coterie({
  titre,
  portrait,
  niveau_richesse,
  fonds,
  description,
  descriptionCourante,
  majDescriptionCourante,
  page,
  voies,
  modifs_caracs,
  modifs_comps,
  objets,
  capacite_magique,
  deDeVie,
}) {
  const { perso, setPerso } = useContext(PersoContexte)

  function appliquerSelection() {
    var fond = fonds[getRandomInt(fonds.length)]

    majDescriptionCourante({
      texte: description,
      titre: titre,
      page: page,
      niveau_richesse: niveau_richesse,
      voies: voies,
      modifs_caracs: modifs_caracs,
      modifs_comps: modifs_comps,
      objets: objets,
      capacite_magique: capacite_magique,
      deDeVie: deDeVie,
    })

    var changementsAuPerso = {
      fond: fond,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  var selection = descriptionCourante.titre === titre

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
