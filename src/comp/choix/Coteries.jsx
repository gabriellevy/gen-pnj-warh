import Coterie from './coteries/Coterie'
import { lstCoteries } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import ZoneDeValidation from './coteries/ZoneDeValidation'
import { useState } from 'react'

function Coteries() {
  const [descriptionCourante, majDescriptionCourante] = useState({
    texte: '',
    fond: '',
    titre: '',
  })

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
                descriptionCourante={descriptionCourante}
                majDescriptionCourante={majDescriptionCourante}
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
      <ZoneDeValidation
        descriptionCourante={descriptionCourante}
        majDescriptionCourante={majDescriptionCourante}
      />
    </div>
  )
}

export default Coteries
