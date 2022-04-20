import Link from "next/link";
import { ImageContainer } from "./styled";
import { LogoIcon } from "../icons/logo";

export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <ImageContainer>
          <LogoIcon />
        </ImageContainer>
      </a>
    </Link>
  );
};
