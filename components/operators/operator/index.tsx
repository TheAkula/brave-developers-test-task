import Image from "next/image";
import Link from "next/link";
import { StyledLink, ImageContainer } from "./styled";

interface OperatorProps {
  id: number | string;
  title: string;
  imgUrl: string;
}

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
