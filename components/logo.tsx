import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <ImageContainer>
          <Image src="/images/logo.svg" width="100%" height="100%" alt="logo" />
        </ImageContainer>
      </a>
    </Link>
  );
};

export default Logo;
