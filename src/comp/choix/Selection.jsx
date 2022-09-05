import Coterie from './coteries/Coterie'
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

function Selection() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [age, majAge] = useState(perso.age)
  const [poids, majPoids] = useState(calculerPoids(perso))

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
  function gererSexe(e) {
    const male = e.target.value === 'male'

    var changementsAuPerso = {
      male: male,
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
        <div className="texteStandard">
          <form>
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
            <br />
            <br />
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
            <br />
            <br />
            <div>
              <label>
                <input
                  type="radio"
                  checked={perso.male}
                  onChange={gererSexe}
                  value="male"
                  name="gender"
                />
                Homme
              </label>
              <label>
                <input
                  type="radio"
                  checked={!perso.male}
                  onChange={gererSexe}
                  value="femelle"
                  name="gender"
                />
                Femme
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Selection
