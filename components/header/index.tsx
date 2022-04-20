import { Logo } from "../logo";
import { Container } from "../container";
import { StyledHeader, HeaderInner } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <Logo />
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
};
