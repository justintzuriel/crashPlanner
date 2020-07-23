import React from "react";
import Cell from "./Cell";
import styled from "styled-components";
import { Component } from "react";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
`;

const Selector = styled.select`
  display: inline-block;
  width: 100%;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  background: #5b5b5b;
  width: 100%;
  border-left: 1px solid black;
  align: center;
  position: relative;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Semester = styled.div`
  text-align: center;
  padding: 10px;
  background: #94eb6e;
  border-bottom: 1px solid black;
  font-weight: 600;
`;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: [],
      focusArea: "Algo",
    };
  }

  handleSelectTable = (moduleCode) => {
    this.props.handleSelect(moduleCode); // call the handleSelectContainer to update the state in the container component
  };

  render() {
    return (
      <Container>
        <Selector
          className="custom-select"
          onChange={this.props.handleSamplePlan}
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
        </Selector>
        <TableWrapper>
          {this.props.cellData.map((col) => (
            <ColumnWrapper>
              <Semester>{"SEMESTER " + (col[0].col + 1)}</Semester>
              {col.map((cell) => (
                <Cell
                  key={cell.id}
                  data={cell}
                  handleSelect={this.props.handleSelect}
                  handleDelete={this.props.handleDelete}
                />
              ))}
            </ColumnWrapper>
          ))}
        </TableWrapper>
      </Container>
    );
  }
}

export default Table;
