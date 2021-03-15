import React from "react";
import { Container } from "./styles";

import Card from "../Card";
import { Droppable } from "react-beautiful-dnd";
import NewCardButton from "../NewCardButton";

const List = ({ data, listIndex, addItemToList }) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && <NewCardButton addItemToList={addItemToList} />}
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

export default List;
