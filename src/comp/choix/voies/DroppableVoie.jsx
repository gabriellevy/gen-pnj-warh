import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import DraggableVoie from './DraggableVoie'
import { idARepartir } from './voiesARepartir'

const Container = styled.div`
  margin: 4px;
  border: 2px solid lightgrey;
  border-radius: 15px;
  background-color: ${(props) => (props.valide ? 'green' : 'red')};
`
const Title = styled.h3`
  padding: 4px;
  margin: 3px;
`
const VoieListe = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDragginOver ? 'skyblue' : 'none')};
  flex-grow: 1;
  min-height: 40px;
`

function DroppableVoie({ colonne, valeurs, indexColonne }) {
  var valide = valeurs.length === 1
  if (colonne.id === idARepartir) valide = true

  return (
    <Container valide={valide}>
      <Title>{colonne.titre}</Title>
      <Droppable droppableId={colonne.id}>
        {(provided, snapshot) => (
          <VoieListe
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDragginOver={snapshot.isDraggingOver}
          >
            {valeurs.map((voie, index) =>
              voie.valeur !== '' ? (
                <DraggableVoie
                  key={voie.id}
                  idVoie={voie.valeur}
                  idDnD={voie.id}
                  index={index}
                  valide={valide}
                  classement={indexColonne + 1}
                />
              ) : (
                ''
              )
            )}
            {provided.placeholder}
          </VoieListe>
        )}
      </Droppable>
    </Container>
  )
}

export default DroppableVoie
