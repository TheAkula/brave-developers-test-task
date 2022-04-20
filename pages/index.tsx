import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { Operators } from "../components/operators";
import { Input } from "../components/input";
import { ChangeEventHandler, useState } from "react";
import { Container } from "../components/container";

const Home: NextPage = () => {
  const [value, setValue] = useState("");

  const onChangedHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Layout>
        <Container>
          <Input curValue={value} changed={onChangedHandler} />
          <Operators title={value} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
