import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px
padding: 8px;
margin-bottom: 8px;
transition: background-color 0.2s ease;
background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`

function DraggableTirage({ valeur, id, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {valeur}
        </Container>
      )}
    </Draggable>
  )
}

export default DraggableTirage
