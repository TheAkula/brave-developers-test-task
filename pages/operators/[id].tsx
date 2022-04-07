import { GetStaticPaths, GetStaticProps } from "next";
import operators from "../../public/data/operators.json";
import PaymentElem from "../../components/paymentElem";

export interface OperatorProps {
  id: string;
  title: string;
  imgUrl: string;
}

const Operator = (props: OperatorProps) => {
  return <PaymentElem {...props} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = operators.operators;
  const paths = data.map((route) => {
    return {
      params: { id: route.id },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const oper = operators.operators.find((op) => op.id === params!.id);

  return {
    props: { ...oper },
  };
};

export default Operator;
