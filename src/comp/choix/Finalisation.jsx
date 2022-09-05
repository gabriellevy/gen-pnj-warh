import { useState, useEffect } from 'react'
import { nomCotConquistadors } from '../../donnees/lstCoteries'
import { nomCotHautsElfes } from '../../donnees/lstCoteries'
import { nomCotElfesSylvains } from '../../donnees/lstCoteries'
import { nomCotBretonniens } from '../../donnees/lstCoteries'
import { nomCotKislevites } from '../../donnees/lstCoteries'
import { genNomConquistador } from '../../donnees/coteries/conquistadors/nomsConquistadors'
import { genNomElfe } from '../../donnees/coteries/elfes/nomsElfes'
import { genNomBretonnien } from '../../donnees/coteries/bretonniens/nomBretonniens'
import { genNomKislevite } from '../../donnees/coteries/kislevites/nomsKislevites'
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
  const [nom, majNom] = useState(perso.nom)
  const [poids, majPoids] = useState(calculerPoids(perso))
  const [description, majDescription] = useState(perso.description)

  function majNomLocal(nom) {
    majNom(nom)
    var changementsAuPerso = {
      age: age,
      nom: nom,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  useEffect(() => {
    // générer un nom selon la coterie choisie :
    var nom = 'youpi pas de noms pour cette coterie'
    if (perso.coterie === nomCotConquistadors)
      nom = genNomConquistador(perso.male)
    else if (perso.coterie === nomCotHautsElfes) nom = genNomElfe(perso.male)
    else if (perso.coterie === nomCotElfesSylvains) nom = genNomElfe(perso.male)
    else if (perso.coterie === nomCotBretonniens)
      nom = genNomBretonnien(perso.male)
    else if (perso.coterie === nomCotKislevites)
      nom = genNomKislevite(perso.male)

    majNomLocal(nom)
  }, [perso.male])

  useEffect(() => {
    if (perso.poids !== poids) majPoids(perso.poids)
  }, [perso.poids, poids, majPoids])

  function gererNom(e) {
    majNomLocal(e.target.value)
  }
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
          Nom :
          <input
            type="text"
            id="nom"
            placeholder="Nom du perso"
            onChange={gererNom}
            value={nom}
          />
          <br />
          <br />
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
