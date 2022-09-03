import { useState, useContext, useEffect } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { DragDropContext } from 'react-beautiful-dnd'
import voiesARepartir, {
  idARepartir,
  idMetier,
  idOccupation,
  idPassion,
  idVoie1,
  idVoie2,
  idVoie3,
  idVoie4,
  idVoie5,
  idVoie6,
} from './voies/voiesARepartir'
import styled from 'styled-components'
import { lstCoteries, nomCotTempliers } from '../../donnees/lstCoteries'
import DroppableVoie from './voies/DroppableVoie'
import { getVoie } from '../../donnees/lstVoies'
import { getCompObjPropertyName } from '../../donnees/lstComps'
import { PhaseChoixContexte } from '../../utils/contexte/phaseChoix'

const Container = styled.div`
  display: flex;
`

export default function Voies() {
  const [dndDonnees, setDnDDonnees] = useState(voiesARepartir)
  const { perso, setPerso } = useContext(PersoContexte)
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    // mise en place des voies à répartir selon la coterie
    var idCoteriePerso = perso.coterie
    var coteriePerso
    lstCoteries.forEach((coterie) => {
      if (coterie.titre === idCoteriePerso) {
        coteriePerso = coterie
      }
    })

    var data = voiesARepartir

    if (coteriePerso.voies.length > 0) {
      const voie1 = coteriePerso.voies[0]
      data.valeurs[idVoie1].valeur = voie1
      if (coteriePerso.voies.length > 1) {
        const voie2 = coteriePerso.voies[1]
        data.valeurs[idVoie2].valeur = voie2
        if (coteriePerso.voies.length > 2) {
          const voie3 = coteriePerso.voies[2]
          data.valeurs[idVoie3].valeur = voie3
          if (coteriePerso.voies.length > 3) {
            const voie4 = coteriePerso.voies[3]
            data.valeurs[idVoie4].valeur = voie4
            if (coteriePerso.voies.length > 4) {
              const voie5 = coteriePerso.voies[4]
              data.valeurs[idVoie5].valeur = voie5
              if (coteriePerso.voies.length > 5) {
                const voie6 = coteriePerso.voies[5]
                data.valeurs[idVoie6].valeur = voie6
              }
            }
          }
        }
      }
    }

    // setRerender est complèteemnt bidon mais pour une raison qui m'échappe setDnDDonnees ne provoque aps le rafraichissement par lui-même...
    setDnDDonnees(data)
    setRerender(!rerender)
  }, [])

  function validerVoies() {
    var changementsAuPerso = {}
    var niveauRichesseBonus = 0

    // ----------------------- métier
    const idVoieMetier =
      dndDonnees.valeurs[[dndDonnees.colonnes[[idMetier]].valeursIds[0]]].valeur
    const voieMetier = getVoie(idVoieMetier)
    // MAJ compétences
    voieMetier.competences.forEach((comp) => {
      const compPropertyName = getCompObjPropertyName(comp)
      changementsAuPerso[compPropertyName] = perso[compPropertyName] + 3
    })
    // MAJ niveau de richesse
    niveauRichesseBonus = niveauRichesseBonus + voieMetier.richesse

    // MAJ métier
    changementsAuPerso['metier'] = voieMetier.titre

    // MAJ dé de vie (si supérieur à celui que le perso a déjà)
    if (voieMetier.deDeVie > perso['deDeVie'])
      changementsAuPerso['deDeVie'] = voieMetier.deDeVie

    // ----------------------- passion
    const idVoiePassion =
      dndDonnees.valeurs[[dndDonnees.colonnes[[idPassion]].valeursIds[0]]]
        .valeur
    const voiePassion = getVoie(idVoiePassion)
    // MAJ compétences
    voiePassion.competences.forEach((comp) => {
      const compPropertyName = getCompObjPropertyName(comp)
      changementsAuPerso[compPropertyName] = perso[compPropertyName] + 2
    })
    // MAJ niveau de richesse
    niveauRichesseBonus = niveauRichesseBonus + voiePassion.richesse

    // ----------------------- occupation
    const idVoieOccupation =
      dndDonnees.valeurs[[dndDonnees.colonnes[[idOccupation]].valeursIds[0]]]
        .valeur
    const voieOccupation = getVoie(idVoieOccupation)
    // MAJ compétences
    voieOccupation.competences.forEach((comp) => {
      const compPropertyName = getCompObjPropertyName(comp)
      changementsAuPerso[compPropertyName] = perso[compPropertyName] + 1
    })

    changementsAuPerso['niveau_richesse'] =
      perso['niveau_richesse'] + niveauRichesseBonus
    // les templiers n'ont jamais plus de 1 en richesse
    if (
      perso.coterie === nomCotTempliers &&
      changementsAuPerso['niveau_richesse'] > 0
    )
      changementsAuPerso['niveau_richesse'] = 1
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
    if (colonne.id !== idARepartir)
      choixValides = choixValides && colonne.valeursIds.length === 1
  })

  return (
    <DragDropContext onDragEnd={finGlisserDeposer}>
      <Container>
        <div className="texteStandard">
          <div>
            <h2>
              Faites glisser les voies obtenus selon votre ordre de préférence
            </h2>
            <ul>
              {dndDonnees.ordreColonnes.map((idColonne, indexColonne) => {
                const colonne = dndDonnees.colonnes[idColonne]
                const valeurs = colonne.valeursIds.map(
                  (valeurId) => dndDonnees.valeurs[valeurId]
                )

                return (
                  <DroppableVoie
                    key={colonne.id}
                    colonne={colonne}
                    valeurs={valeurs}
                    indexColonne={indexColonne}
                  />
                )
              })}
            </ul>
          </div>
          {choixValides ? (
            <button className="bouton" onClick={() => validerVoies()}>
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
