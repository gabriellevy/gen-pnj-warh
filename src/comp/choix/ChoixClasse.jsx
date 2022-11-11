import * as React from 'react'
import {
  lstClasses,
  getClasseObj,
  getEvolutionObjFromCarriereAndEvolutionStr,
} from '../../donnees/lstClasses'
import { useContext, useEffect } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { getRandomInt } from '../../utils/rand'
import styled from 'styled-components'

const SpanNoir = styled.span`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 8px 30px;
  border-radius: 6px;
  margin: 5px 0px;
`

const ChoixClasse = () => {
  const { perso, setPerso } = useContext(PersoContexte)
  const [classe, setClasse] = React.useState(perso.classe)
  const [carriere, setCarriere] = React.useState(perso.carriere)
  const [evolution, setEvolution] = React.useState(perso.evolution)

  // manière détournée bancale de faire l'initialisation aléatoire mais bon je fais ce que je peux
  useEffect(() => {
    if (perso.classe === undefined || perso.classe === '') {
      // A FAIRE : virer toute cette sélection aléatoire une fois que les sélection aléatoires spécifques aux races
      // auront été faites dans CarriereGen.js : genCarriere

      var indexClasse = getRandomInt(lstClasses.length)
      var ClasseObj = lstClasses[indexClasse]
      setClasse(ClasseObj.titre)

      var indexCarriere = getRandomInt(ClasseObj.carrieres.length)
      var carriereObj = ClasseObj.carrieres[indexCarriere]
      setCarriere(carriereObj.titre)

      var evolutionObj = {}
      if (carriereObj.evolutions !== undefined) {
        var indexEvolution = getRandomInt(carriereObj.evolutions.length) // A FAIRE : changer probas d'évolution
        evolutionObj = carriereObj.evolutions[indexEvolution]
        setEvolution(evolutionObj.titre)
      } else {
        evolutionObj.titre = ''
      }

      var changementsAuPerso = {
        classe: ClasseObj.titre,
        carriere: carriereObj.titre,
        evolution: evolutionObj.titre,
      }
      var persoFinal = { ...perso, ...changementsAuPerso }
      setPerso(persoFinal)
    } else {
      setClasse(perso.classe)
      setCarriere(perso.carriere)
      setEvolution(perso.evolution)
    }
  }, [perso, setPerso])

  const changeClasse = (event) => {
    setClasse(event.target.value)

    var classeObjCourant = getClasseObj(event.target.value)
    var indexCarriere = getRandomInt(classeObjCourant.carrieres.length)
    var carriereObj = classeObjCourant.carrieres[indexCarriere]
    setCarriere(carriereObj.titre)

    var evolutionObj = {}
    if (carriereObj.evolutions !== undefined) {
      var indexEvolution = getRandomInt(carriereObj.evolutions.length) // A FAIRE : changer probas d'évolution
      evolutionObj = carriereObj.evolutions[indexEvolution]
      setEvolution(evolutionObj.titre)
    } else {
      evolutionObj.titre = ''
    }

    var changementsAuPerso = {
      classe: event.target.value,
      carriere: carriereObj.titre,
      evolution: evolutionObj.titre,
      statut_echelon: evolutionObj.statut.echelon,
      statut_standing: evolutionObj.statut.standing,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  const changeCarriere = (event) => {
    setCarriere(event.target.value)

    var evolutionObj = {}
    if (carriere.evolutions !== undefined) {
      var indexEvolution = getRandomInt(carriere.evolutions.length) // A FAIRE : changer probas d'évolution
      evolutionObj = carriere.evolutions[indexEvolution]
      setEvolution(evolutionObj.titre)
    } else {
      evolutionObj.titre = ''
    }

    var changementsAuPerso = {
      carriere: event.target.value,
      evolution: evolutionObj.titre,
      statut_echelon: evolutionObj.statut.echelon,
      statut_standing: evolutionObj.statut.standing,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  const changeEvolution = (event) => {
    setEvolution(event.target.value)

    var evolutionObj = getEvolutionObjFromCarriereAndEvolutionStr(
      perso.classe,
      perso.carriere,
      event.target.value
    )

    var changementsAuPerso = {
      evolution: event.target.value,
      statut_echelon: evolutionObj.statut.echelon,
      statut_standing: evolutionObj.statut.standing,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  return (
    <div>
      <SpanNoir>
        <label>
          Classe :
          <select value={classe} onChange={changeClasse}>
            {lstClasses.map((classeObj) => (
              <option key={classeObj.titre} value={classeObj.titre}>
                {classeObj.titre}
              </option>
            ))}
          </select>
        </label>
        -&gt;
        {lstClasses.map((classeObj) =>
          classeObj.titre === classe ? (
            <label>
              Carrière :
              <select value={carriere} onChange={changeCarriere}>
                {classeObj.carrieres.map((carriereObj) => (
                  <option key={carriereObj.titre} value={carriereObj.titre}>
                    {carriereObj.titre}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            ''
          )
        )}
        -&gt;
        {lstClasses.map((classeObj) =>
          classeObj.titre === classe
            ? classeObj.carrieres.map((carriereObj) =>
                carriereObj.titre === carriere &&
                carriereObj.evolutions !== undefined ? (
                  <label>
                    Évolution :
                    <select value={evolution} onChange={changeEvolution}>
                      {carriereObj.evolutions.map((evolutionObj) => (
                        <option
                          key={evolutionObj.titre}
                          value={evolutionObj.titre}
                        >
                          {evolutionObj.titre}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : (
                  ''
                )
              )
            : ''
        )}
      </SpanNoir>
    </div>
  )
}

export default ChoixClasse
