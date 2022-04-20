import { Operator } from "./operator";
import data from "../../public/data/operators.json";
import { OperatorsContainer } from "./styled";

export const Operators = ({ title }: { title: string }) => {
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
