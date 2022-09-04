import Coterie from './coteries/Coterie'
import { lstCoteries } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import { useState } from 'react'

function Selection() {
  return (
    <div>
      <ul className="lstCoteries_ul">
        {lstCoteries.map(
          ({
            titre,
            portrait,
            fonds,
            description,
            page,
            niveau_richesse,
            affiche,
            voies,
            modifs_caracs,
            modifs_comps,
            objets,
            capacite_magique,
            deDeVie,
          }) =>
            affiche ? (
              <Coterie
                key={titre}
                titre={titre}
                portrait={portrait}
                niveau_richesse={niveau_richesse}
                fonds={fonds}
                description={description}
                page={page}
                voies={voies}
                modifs_caracs={modifs_caracs}
                modifs_comps={modifs_comps}
                objets={objets}
                capacite_magique={capacite_magique}
                deDeVie={deDeVie}
              />
            ) : (
              ''
            )
        )}
      </ul>
    </div>
  )
}

export default Selection
