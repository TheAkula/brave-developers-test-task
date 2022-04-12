import Logo from "../logo";
import Container from "../container";
import { StyledHeader, HeaderInner } from "./styled";

const Header = () => {
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

export default Header;
