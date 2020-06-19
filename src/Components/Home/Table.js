import React from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
import "./Components.css";
import SamplePlan from "../SamplePlan/SamplePlan";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 1500px;
  border-style: solid;
  border-color: red;
  display: inline;
`;

function Table(props) {
  const properties = props.data;

  const [items, setItems] = React.useState({
    modules: [
      props.data.filter(SamplePlan.AlgoS1),
      props.data.filter(SamplePlan.AlgoS2),
      props.data.filter(SamplePlan.AlgoS3),
      props.data.filter(SamplePlan.AlgoS4),
      props.data.filter(SamplePlan.AlgoS5),
      props.data.filter(SamplePlan.AlgoS6),
      props.data.filter(SamplePlan.AlgoS7),
      props.data.filter(SamplePlan.AlgoS8),
    ],
    focusArea: "Algo",
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

  const handlePlan = (event) => {
    switch (event.target.value) {
      case "Algo":
        return setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.AlgoS1),
            properties.filter(SamplePlan.AlgoS2),
            properties.filter(SamplePlan.AlgoS3),
            properties.filter(SamplePlan.AlgoS4),
            properties.filter(SamplePlan.AlgoS5),
            properties.filter(SamplePlan.AlgoS6),
            properties.filter(SamplePlan.AlgoS7),
            properties.filter(SamplePlan.AlgoS8),
          ],
        });
        break;
      case "AI":
        return setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.AIS1),
            properties.filter(SamplePlan.AIS2),
            properties.filter(SamplePlan.AIS3),
            properties.filter(SamplePlan.AIS4),
            properties.filter(SamplePlan.AIS5),
            properties.filter(SamplePlan.AIS6),
            properties.filter(SamplePlan.AIS7),
            properties.filter(SamplePlan.AIS8),
          ],
        });
        break;
      case "Graphics":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.GraphicsS1),
            properties.filter(SamplePlan.GraphicsS2),
            properties.filter(SamplePlan.GraphicsS3),
            properties.filter(SamplePlan.GraphicsS4),
            properties.filter(SamplePlan.GraphicsS5),
            properties.filter(SamplePlan.GraphicsS6),
            properties.filter(SamplePlan.GraphicsS7),
            properties.filter(SamplePlan.GraphicsS8),
          ],
        });
        break;
      case "Security":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.SecurityS1),
            properties.filter(SamplePlan.SecurityS2),
            properties.filter(SamplePlan.SecurityS3),
            properties.filter(SamplePlan.SecurityS4),
            properties.filter(SamplePlan.SecurityS5),
            properties.filter(SamplePlan.SecurityS6),
            properties.filter(SamplePlan.SecurityS7),
            properties.filter(SamplePlan.SecurityS8),
          ],
        });
        break;
      case "DB":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.DBS1),
            properties.filter(SamplePlan.DBS2),
            properties.filter(SamplePlan.DBS3),
            properties.filter(SamplePlan.DBS4),
            properties.filter(SamplePlan.DBS5),
            properties.filter(SamplePlan.DBS6),
            properties.filter(SamplePlan.DBS7),
            properties.filter(SamplePlan.DBS8),
          ],
        });
        break;
      case "Media":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.MediaS1),
            properties.filter(SamplePlan.MediaS2),
            properties.filter(SamplePlan.MediaS3),
            properties.filter(SamplePlan.MediaS4),
            properties.filter(SamplePlan.MediaS5),
            properties.filter(SamplePlan.MediaS6),
            properties.filter(SamplePlan.MediaS7),
            properties.filter(SamplePlan.MediaS8),
          ],
        });
        break;
      case "Network":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.NetworkS1),
            properties.filter(SamplePlan.NetworkS2),
            properties.filter(SamplePlan.NetworkS3),
            properties.filter(SamplePlan.NetworkS4),
            properties.filter(SamplePlan.NetworkS5),
            properties.filter(SamplePlan.NetworkS6),
            properties.filter(SamplePlan.NetworkS7),
            properties.filter(SamplePlan.NetworkS8),
          ],
        });
        break;
      case "Parallel":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.ParallelS1),
            properties.filter(SamplePlan.ParallelS2),
            properties.filter(SamplePlan.ParallelS3),
            properties.filter(SamplePlan.ParallelS4),
            properties.filter(SamplePlan.ParallelS5),
            properties.filter(SamplePlan.ParallelS6),
            properties.filter(SamplePlan.ParallelS7),
            properties.filter(SamplePlan.ParallelS8),
          ],
        });
        break;
      case "Languages":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.LanguagesS1),
            properties.filter(SamplePlan.LanguagesS2),
            properties.filter(SamplePlan.LanguagesS3),
            properties.filter(SamplePlan.LanguagesS4),
            properties.filter(SamplePlan.LanguagesS5),
            properties.filter(SamplePlan.LanguagesS6),
            properties.filter(SamplePlan.LanguagesS7),
            properties.filter(SamplePlan.LanguagesS8),
          ],
        });
        break;
      case "SE":
        setItems({
          ...items,
          focusArea: event.target.value,
          modules: [
            properties.filter(SamplePlan.SES1),
            properties.filter(SamplePlan.SES2),
            properties.filter(SamplePlan.SES3),
            properties.filter(SamplePlan.SES4),
            properties.filter(SamplePlan.SES5),
            properties.filter(SamplePlan.SES6),
            properties.filter(SamplePlan.SES7),
            properties.filter(SamplePlan.SES8),
          ],
        });
        break;
      // default:
      //   setItems({ modules: props.data });
      //   break;
    }
  };

  return (
    <TableWrapper>
      <select
        className="custom-select"
        value={items.focusArea}
        onChange={handlePlan}
      >
        <option value="Algo"> Algorithms and Theory</option>
        <option value="AI">Artificial Intelligence</option>
        <option value="Graphics">Computer Graphics and Games</option>
        <option value="Security">Computer Security</option>
        <option value="DB">Database Systems</option>
        <option value="Media">Multimedia Information Retrieval</option>
        <option value="Network">Networking and Distributed Systems</option>
        <option value="Parallel">Parallel Computing</option>
        <option value="Languages">Programming Languages</option>
        <option value="SE">Software Engineering</option>
      </select>
      <GridContextProvider onChange={onChange}>
        <div className="dropzonecontainer">
          {console.log(items.modules, items.focusArea)}
          <GridDropZone
            className="dropzone"
            id="sem1"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[0].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="sem2"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[1].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="sem3"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[2].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="sem4"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[3].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="sem5"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[4].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="sem6"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[5].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="sem7"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[6].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="sem8"
            boxesPerRow={1}
            rowHeight={70}
          >
            {items.modules[7].map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </div>
      </GridContextProvider>
    </TableWrapper>
  );
}

export default Table;
