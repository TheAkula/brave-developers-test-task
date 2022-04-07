import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface OperatorProps {
  id: number | string;
  title: string;
  imgUrl: string;
}

const StyledLink = styled.a`
  display: block;
  width: 170px;
  height: 200px;
  background-color: #fff;
  text-decoration: none;
  color: black;
  border-radius: 2px;
  text-align: center;
  padding-top: 30px;
  border-radius: 6px;
  transition: background-color 0.1s;

  :hover {
    background-color: #fffdd6;
  }

  h3 {
    font-size: 1em;
  }

  @media screen and (max-width: 500px) {
    width: 120px;
    height: 160px;
  }
`;

const ImageContainer = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto;

  img {
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;

const Operator = ({ id, title, imgUrl }: OperatorProps) => {
  return (
    <Link href={"/operators/" + id} passHref>
      <StyledLink>
        <ImageContainer>
          <Image
            src={imgUrl}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt={title}
          />
        </ImageContainer>
        <h3 style={{ marginTop: "15px" }}>{title}</h3>
      </StyledLink>
    </Link>
  );
};

export default Operator;
