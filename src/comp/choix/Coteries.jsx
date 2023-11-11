import Coterie from './coteries/Coterie'
import ChoixClasse from './ChoixClasse'
import { lstCoteries } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { SpanNoir } from '../App'

function Coteries() {
  const { perso, setPerso } = useContext(PersoContexte)

  // manière détournée bancale de faire l'initialisation aléatoire de la coterie mais bon je fais ce que je peux
  useEffect(() => {
      var changementsAuPerso = {
        rafraichir: 1,
      }
      var persoFinal = { ...perso, ...changementsAuPerso }
      setPerso(persoFinal)
  }, [])

  return (
    <div>
      <ul className="lstCoteries_ul">
        {lstCoteries.map(
          ({
            titre,
            portrait,
            fonds,
            page,
            niveau_richesse,
            affiche,
            voies,
            modifs_caracs,
            modifs_comps,
            objets,
          }) =>
            affiche ? (
              <Coterie
                key={titre}
                titre={titre}
                portrait={portrait}
                niveau_richesse={niveau_richesse}
                fonds={fonds}
                page={page}
                voies={voies}
                modifs_caracs={modifs_caracs}
                modifs_comps={modifs_comps}
                objets={objets}
              />
            ) : (
              ''
            )
        )}
      </ul>
    </div>
  )
}

export default Coteries
