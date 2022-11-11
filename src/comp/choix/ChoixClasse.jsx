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

const FlecheSpanNoir = styled.span`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 1px 10px 4px 10px;
  margin: 5px 0px;
`

const SelectNoir = styled.select`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 4px 5px;
  border-radius: 6px;
  margin: 5px 0px;
`

const ChoixClasse = () => {
  const { perso, setPerso } = useContext(PersoContexte)
  const [classe, setClasse] = React.useState(perso.classe)
  const [carriere, setCarriere] = React.useState(perso.carriere)
  const [evolution, setEvolution] = React.useState(perso.evolution)

  const changeClasse = (event) => {
    setClasse(event.target.value)

    var classeObjCourant = getClasseObj(event.target.value)
    var indexCarriere = getRandomInt(classeObjCourant.carrieres.length)
    var carriereObj = classeObjCourant.carrieres[indexCarriere]
    setCarriere(carriereObj.titre)

    var changementsAuPerso = {
      classe: event.target.value,
      carriere: carriereObj.titre,
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
      <label>
        <SelectNoir value={classe} onChange={changeClasse}>
          {lstClasses.map((classeObj) => (
            <option key={classeObj.titre} value={classeObj.titre}>
              {classeObj.titre}
            </option>
          ))}
        </SelectNoir>
      </label>
      <FlecheSpanNoir>-&gt;</FlecheSpanNoir>
      {lstClasses.map((classeObj) =>
        classeObj.titre === classe ? (
          <label>
            <SelectNoir value={carriere} onChange={changeCarriere}>
              {classeObj.carrieres.map((carriereObj) => (
                <option key={carriereObj.titre} value={carriereObj.titre}>
                  {carriereObj.titre}
                </option>
              ))}
            </SelectNoir>
          </label>
        ) : (
          ''
        )
      )}
      <FlecheSpanNoir>-&gt;</FlecheSpanNoir>
      {lstClasses.map((classeObj) =>
        classeObj.titre === classe
          ? classeObj.carrieres.map((carriereObj) =>
              carriereObj.titre === carriere &&
              carriereObj.evolutions !== undefined ? (
                <label>
                  <SelectNoir value={evolution} onChange={changeEvolution}>
                    {carriereObj.evolutions.map((evolutionObj) => (
                      <option
                        key={evolutionObj.titre}
                        value={evolutionObj.titre}
                      >
                        {evolutionObj.titre}
                      </option>
                    ))}
                  </SelectNoir>
                </label>
              ) : (
                ''
              )
            )
          : ''
      )}
    </div>
  )
}

export default ChoixClasse
