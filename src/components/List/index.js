import React from "react";
import { Container } from "./styles";
import { MdAdd } from "react-icons/md";
import Card from "../Card";
import { Droppable } from "react-beautiful-dnd";

const index = ({ data, index: listIndex }) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
      <Droppable droppableId={data.title}>
        {(provided, snapshot) => (
          <ul
            ref={provided.innerRef}
            // style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {data.cards.map((card, index) => (
              <Card
                key={card.id}
                index={index}
                data={card}
                listIndex={listIndex}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </Container>
  );
};

export default index;
