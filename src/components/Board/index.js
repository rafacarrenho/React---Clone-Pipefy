import React, { useEffect } from "react";
import { Container } from "./styles";
import List from "../List";
import { loadLists } from "../../services/api";
import { useState } from "react";
import BoardContext from "./context";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const data = loadLists();
const Board = () => {
  const [lists, setLists] = useState(data);
  const onDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newState = [...lists];
    const sourceID = source.droppableId;
    const destinationID = destination.droppableId;
    const sourceIndex = newState.findIndex((item) => item.title === sourceID);
    const destinationIndex = newState.findIndex(
      (item) => item.title === destinationID
    );

    if (sourceID === destinationID) {
      let unique = reorder(
        lists.find((list) => list.title === sourceID),
        source.index,
        destination.index
      );

      newState[sourceIndex].cards = unique;
    } else {
      const result = move(
        newState[sourceIndex],
        newState[destinationIndex],
        source,
        destination
      );

      newState[sourceIndex].cards = result[sourceID].map((val, index) => {
        val.index = index;
        return val;
      });
      newState[destinationIndex].cards = result[destinationID].map(
        (val, index) => {
          val.index = index;
          return val;
        }
      );
    }

    setLists(newState);
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    let sourceClone = Array.from(source.cards);
    const destClone = destination.cards;
    const removed = sourceClone[droppableSource.index];
    sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone.map((val, index) => {
      val.index = index;
      return val;
    });
    result[droppableDestination.droppableId] = destClone.map((val, index) => {
      val.index = index || 0;
      return val;
    });

    return result;
  };

  const reorder = (list, startIndex, endIndex) => {
    let result = Array.from(list.cards);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result
      .filter((val) => val !== undefined)
      .map((val, index) => {
        val.index = index;
        return val;
      });
  };

  const addItemToList = (description) => {
    const createdCard = {
      content: description,
      id: uuidv4(),
      index: lists[0]?.cards?.length || 0,
      labels: ["#54e1f7"],
      user: "User1",
    };

    const newList = lists.map((list) => {
      if (list.title === "Tarefas") {
        list.cards.push(createdCard);
      }
      return list;
    });

    setLists(newList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContext.Provider value={{ lists }}>
        <Container>
          {lists?.map((list, index) => (
            <List
              key={list.title}
              data={list}
              index={index}
              addItemToList={addItemToList}
            />
          ))}
        </Container>
      </BoardContext.Provider>
    </DragDropContext>
  );
};

export default Board;
