import { Container } from "../../container";
import { LevelBar } from "./levelBar";
import { StyledHeader } from "./styled";

interface HeaderProps {
  level: number;
  isFailed: boolean;
  isPaid: boolean;
}

export const Header = ({ level, isFailed, isPaid }: HeaderProps) => {
  return (
    <div>
      <Container>
        <StyledHeader>
          <p>Мобильный телефон</p>
        </StyledHeader>
        <LevelBar level={level} failed={isFailed} paid={isPaid} />
      </Container>
    </div>
  );
};
