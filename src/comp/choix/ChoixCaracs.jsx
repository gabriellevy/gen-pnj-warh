import { useState, useContext, useEffect } from 'react'
import { getRandomInt } from '../../utils/rand'
import { PersoContexte } from '../../utils/contexte/perso'
import DroppableCarac from './caracs/DroppableCarac'
//import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import tiragesInitiaux from './caracs/tiragesInitiaux'
import styled from 'styled-components'
import { PhaseChoixContexte } from '../../utils/contexte/phaseChoix'

const Container = styled.div`
  display: flex;
`

function Caracs() {
  const [dndDonnees, setDnDDonnees] = useState(tiragesInitiaux)
  const { perso, setPerso } = useContext(PersoContexte)
  const [rerender, setRerender] = useState(false)
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)

  useEffect(() => {
    var valTiree1 = getRandomInt(6) + getRandomInt(6) + 2
    var valTiree2 = getRandomInt(6) + getRandomInt(6) + 2
    var valTiree3 = getRandomInt(6) + getRandomInt(6) + 2

    var data = tiragesInitiaux

    data.valeurs['tirage-1'].valeur = valTiree1 + 6
    data.valeurs['tirage-2'].valeur = 19 - valTiree1
    data.valeurs['tirage-3'].valeur = valTiree2 + 6
    data.valeurs['tirage-4'].valeur = 19 - valTiree2
    data.valeurs['tirage-5'].valeur = valTiree3 + 6
    data.valeurs['tirage-6'].valeur = 19 - valTiree3

    // setRerender est complèteemnt bidon mais pour une raison qui m'échappe setDnDDonnees ne provoque aps le rafraichissement par lui-même...
    setDnDDonnees(data)
    setRerender(!rerender)
  }, [])

  function validerCaracs() {
    var nouvCaracMagie =
      dndDonnees.valeurs[dndDonnees.colonnes['magie'].valeursIds[0]].valeur
    var changementsAuPerso = {
      dexterite:
        perso.dexterite +
        dndDonnees.valeurs[dndDonnees.colonnes['dexterite'].valeursIds[0]]
          .valeur,
      constitution:
        perso.constitution +
        dndDonnees.valeurs[dndDonnees.colonnes['constitution'].valeursIds[0]]
          .valeur,
      charisme:
        perso.charisme +
        dndDonnees.valeurs[dndDonnees.colonnes['charisme'].valeursIds[0]]
          .valeur,
      intelligence:
        perso.intelligence +
        dndDonnees.valeurs[dndDonnees.colonnes['intelligence'].valeursIds[0]]
          .valeur,
      sensibilite:
        perso.sensibilite +
        dndDonnees.valeurs[dndDonnees.colonnes['sensibilite'].valeursIds[0]]
          .valeur,
      magie: perso.magie + nouvCaracMagie,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)

    majPhaseChoix(phaseChoix + 1)
  }

  function finGlisserDeposer(result) {
    document.body.style.color = 'inherit'
    document.body.style.transition = 'inherit'
    const { destination, source, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return

    const colonneSource = dndDonnees.colonnes[source.droppableId]
    const colonneDest = dndDonnees.colonnes[destination.droppableId]

    if (colonneSource === colonneDest) {
      const nouvValeursIdsSource = Array.from(colonneSource.valeursIds)
      nouvValeursIdsSource.splice(source.index, 1)
      nouvValeursIdsSource.splice(destination.index, 0, draggableId)

      const nouvCol = {
        ...colonneSource,
        valeursIds: nouvValeursIdsSource,
      }

      const nouvDnDDonnees = {
        ...dndDonnees,
        colonnes: {
          ...dndDonnees.colonnes,
          [nouvCol.id]: nouvCol,
        },
      }

      setDnDDonnees(nouvDnDDonnees)
      return
    }

    const nouvValeursIdsSource = Array.from(colonneSource.valeursIds)
    nouvValeursIdsSource.splice(source.index, 1)
    const newColSrc = {
      ...colonneSource,
      valeursIds: nouvValeursIdsSource,
    }

    const nouvValeursIdsDest = Array.from(colonneDest.valeursIds)
    nouvValeursIdsDest.splice(destination.index, 0, draggableId)
    const newColDest = {
      ...colonneDest,
      valeursIds: nouvValeursIdsDest,
    }
    const nouvDnDDonnees = {
      ...dndDonnees,
      colonnes: {
        ...dndDonnees.colonnes,
        [newColSrc.id]: newColSrc,
        [newColDest.id]: newColDest,
      },
    }

    setDnDDonnees(nouvDnDDonnees)
  }

  var choixValides = true

  Object.values(dndDonnees.colonnes).forEach((colonne) => {
    if (colonne.id === 'tirages')
      choixValides = choixValides && colonne.valeursIds.length === 0
    else choixValides = choixValides && colonne.valeursIds.length === 1
  })

  return (
    <DragDropContext onDragEnd={finGlisserDeposer}>
      <Container>
        <div>
          <div>
            <h2>
              Faites glisser les tirages obtenus vers la caractéristique à
              laquelle vous souhaitez les affecter
            </h2>
            <ul className="lstCoteries_ul">
              {dndDonnees.ordreColonnes.map((idColonne) => {
                const colonne = dndDonnees.colonnes[idColonne]
                const valeurs = colonne.valeursIds.map(
                  (valeurId) => dndDonnees.valeurs[valeurId]
                )

                return (
                  <DroppableCarac
                    key={colonne.id}
                    colonne={colonne}
                    valeurs={valeurs}
                  />
                )
              })}
            </ul>
          </div>
          {choixValides ? (
            <button className="bouton" onClick={() => validerCaracs()}>
              Valider
            </button>
          ) : (
            ''
          )}
        </div>
      </Container>
    </DragDropContext>
  )
}

export default Caracs
