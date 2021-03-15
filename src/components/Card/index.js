import React from "react";
import { Container, Label } from "./styles";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ data, index, listIndex }) => {
  return (
    <Draggable key={data.id} draggableId={`card-${data.id}`} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <header>
            {data.labels &&
              data.labels.map((label, i) => (
                <Label color={label} key={`label-${label}`} />
              ))}
          </header>
          <p>{data.content}</p>
          {data.user && (
            <img src="https://github.com/rafacarrenho.png" alt="Avatar" />
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
