import Operator from "./operator";
import data from "../public/data/operators.json";
import styled from "styled-components";

const OperatorsContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Operators = ({ title }: { title: string }) => {
  return (
    <OperatorsContainer>
      {data.operators
        .filter((oper) =>
          oper.title.toLowerCase().startsWith(title.toLowerCase())
        )
        .map((oper, i) => (
          <Operator key={i} {...oper} />
        ))}
    </OperatorsContainer>
  );
};

export default Operators;
