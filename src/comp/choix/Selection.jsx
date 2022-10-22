import Coterie from './coteries/Coterie'
import ChoixClasse from './ChoixClasse'
import { lstCoteries } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { calculerPoids, PersoContexte } from '../../utils/contexte/perso'
import { modificateurCarac } from '../../donnees/lstCaracs'
import {
  getCompObjPropertyName,
  nomCorpsACorps,
  nomTir,
} from '../../donnees/lstComps'
import { getRandomInt } from '../../utils/rand'

function Selection() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [age, majAge] = useState(perso.age)
  const [poids, majPoids] = useState(calculerPoids(perso))

  // manière détournée bancale de faire l'initialisation aléatoire de la coterie mais bon je fais ce que je peux
  useEffect(() => {
    if (perso.coterie === undefined || perso.coterie === '') {
      // A FAIRE : refactoriser tout ça proprement et faire en sorte que l'affichage du perso soit mis à jour immédiatement
      var indexCoterie = getRandomInt(lstCoteries.length)
      var coterieObj = lstCoteries[indexCoterie]
      var fond = coterieObj.fonds[getRandomInt(coterieObj.fonds.length)]

      var changementsAuPerso = {
        coterie: coterieObj.titre,
        fond: fond,
      }
      var persoFinal = { ...perso, ...changementsAuPerso }
      setPerso(persoFinal)
    }
  }, [perso, setPerso])

  useEffect(() => {
    if (perso.poids !== poids) majPoids(perso.poids)
  }, [perso.poids, poids, majPoids])

  function gererAge(e) {
    majAge(e.target.value)

    var changementsAuPerso = {
      age: e.target.value,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }
  function gererPoids(e) {
    majPoids(e.target.value)

    var changementsAuPerso = {
      poids: e.target.value,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

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

      <div style={{ padding: '0px 15px 0px 15px' }}>
        <form>
          <div className="texteStandard">
            Âge :
            <input
              type="text"
              id="age"
              maxLength={3}
              pattern="[+-]?\d+(?:[.,]\d+)?"
              placeholder="Âge du perso"
              onChange={gererAge}
              value={age}
            />
          </div>

          <div className="texteStandard">
            Poids :
            <input
              type="text"
              id="poids"
              maxLength={3}
              pattern="[+-]?\d+(?:[.,]\d+)?"
              placeholder="Poids du perso"
              onChange={gererPoids}
              value={poids}
            />
          </div>

          <div className="texteStandard">
            <ChoixClasse />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Selection
