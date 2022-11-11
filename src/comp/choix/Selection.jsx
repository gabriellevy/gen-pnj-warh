import Coterie from './coteries/Coterie'
import ChoixClasse from './ChoixClasse'
import { lstCoteries } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { getRandomInt } from '../../utils/rand'
import styled from 'styled-components'

const SpanNoir = styled.span`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 4px 30px;
  border-radius: 4px;
  margin: 5px 0px;
`

function Selection() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [age, majAge] = useState(perso.age)

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

  function gererAge(e) {
    majAge(e.target.value)

    var changementsAuPerso = {
      age: e.target.value,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  useEffect(() => {
    majAge(perso.age)
  }, [perso.age])

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

      <form>
        <div style={{ padding: '5px 15px 5px 15px' }}>
          <SpanNoir>
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
          </SpanNoir>
        </div>
        <div style={{ padding: '15px 15px 15px 15px' }}>
          <ChoixClasse />
        </div>
      </form>
    </div>
  )
}

export default Selection
