import React from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
import "./Components.css";
import Cell from "./Cell";

function Table() {
  const [items, setItems] = React.useState({
    sem1: [
      { id: 1, name: "CS2100" },
      { id: 2, name: "CS1231" },
      { id: 3, name: "CS1010" },
      { id: 4, name: "CS3233" },
      { id: 5, name: "CS9999" },
      { id: 6, name: "CS1234" },
    ],
    sem2: [
      { id: 7, name: "george" },
      { id: 8, name: "rupert" },
      { id: 9, name: "alice" },
      { id: 10, name: "katherine" },
      { id: 11, name: "pam" },
      { id: 12, name: "katie" },
    ],
    sem3: [
      { id: <Cell />, name: "george" },
      { id: 14, name: "rupert" },
      { id: 15, name: "alice" },
      { id: 16, name: "katherine" },
      { id: 17, name: "pam" },
      { id: 18, name: "katie" },
    ],
    sem4: [
      { id: 19, name: "george" },
      { id: 20, name: "rupert" },
      { id: 21, name: "alice" },
      { id: 22, name: "katherine" },
      { id: 23, name: "pam" },
      { id: 24, name: "katie" },
    ],
  });

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="container">
        <GridDropZone
          className="dropzone sem1"
          id="sem1"
          boxesPerRow={1}
          rowHeight={70}
        >
          {items.sem1.map((item) => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">{item.id}</div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
        <GridDropZone
          className="dropzone sem2"
          id="sem2"
          boxesPerRow={1}
          rowHeight={70}
        >
          {items.sem2.map((item) => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">{item.id}</div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
        <GridDropZone
          className="dropzone sem3"
          id="sem3"
          boxesPerRow={1}
          rowHeight={70}
        >
          {items.sem3.map((item) => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">{item.id}</div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
        <GridDropZone
          className="dropzone sem4"
          id="sem4"
          boxesPerRow={1}
          rowHeight={70}
        >
          {items.sem4.map((item) => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">{item.id}</div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}

export default Table;
