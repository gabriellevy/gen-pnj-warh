import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { calculerPoids, PersoContexte } from '../../utils/contexte/perso'
import { modificateurCarac } from '../../donnees/lstCaracs'
import {
  getCompObjPropertyName,
  nomCorpsACorps,
  nomTir,
} from '../../donnees/lstComps'

/**
 * Ce composant contient le choix de final des caracs personnelles n'ayant pas d'effet sur la jouabilité (sexe, nom...)
 * + la calcul des caracs déduites des autres et nécessaires pour le jeu (PV, attaque,...)
 */
function Finalisation() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [age, majAge] = useState(perso.age)
  const [poids, majPoids] = useState(calculerPoids(perso))
  const [description, majDescription] = useState(perso.description)

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
  function gererDescription(e) {
    var changementsAuPerso = {
      description: e.target.value,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
    majDescription(e.target.value)
  }

  return (
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
          <br />
          <textarea
            type="text"
            id="description"
            rows={5}
            cols={90}
            placeholder="Entrez une description du personnage si vous le souhaitez"
            onChange={gererDescription}
            value={description}
          />
        </form>
      </div>
      <button className="bouton" onClick={() => validerFinalisation()}>
        Valider
      </button>
    </div>
  )
}

export default Finalisation
