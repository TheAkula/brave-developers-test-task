import Logo from "./logo";
import styled from "styled-components";
import Container from "./container";

const HeaderInner = styled.div`
  height: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.header`
  background-color: #fff;
`;

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
