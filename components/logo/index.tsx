import Image from "next/image";
import Link from "next/link";
import { ImageContainer } from "./styled";

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
