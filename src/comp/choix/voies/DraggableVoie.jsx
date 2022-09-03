import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import { interpreterNouvLigne } from '../coteries/ZoneDeValidation'
import { getVoie } from '../../../donnees/lstVoies'
import { getCompetence } from '../../../donnees/lstComps'
import { typesDes } from '../../../utils/rand'

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px
padding: 8px;
margin-bottom: 8px;
transition: background-color 0.2s ease;
background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`
/**
 *
 * @param valide : si cette voie a été glissée et est unique dans sa colonne, et donc que ses bonus doivent être affichés
 */
function DraggableVoie({ idVoie, idDnD, index, valide, classement }) {
  var texte = idVoie
  if (valide) {
    const voie = getVoie(idVoie)
    texte = texte + '\n'
    if (voie.richesse > 0 && classement !== 3) {
      texte = texte + '\n - bonus de richesse : +' + voie.richesse
    }
    voie.competences.forEach((idComp) => {
      const compObj = getCompetence(idComp)
      var valeur = 1
      if (classement === 1) valeur = 3
      else if (classement === 2) valeur = 2
      else if (classement === 4) valeur = '?'
      texte =
        texte +
        '\n - +' +
        valeur +
        ' en ' +
        compObj.titre +
        ' (' +
        compObj.carac +
        ')'
    })
    if (classement === 1 || classement === 4)
      texte = texte + '\nDé de vie minimum : ' + typesDes[voie.deDeVie]

    if (voie.description !== '') {
      texte = texte + '\n' + voie.description
    }
  }

  return (
    <Draggable draggableId={idDnD} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {interpreterNouvLigne(texte)}
        </Container>
      )}
    </Draggable>
  )
}

export default DraggableVoie
