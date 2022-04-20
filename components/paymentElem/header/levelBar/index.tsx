import { StyledLevelBar, Level } from "./styled";
import { baseTheme } from "../../../../styles/theme";

interface LevelBarProps {
  level: number;
  paid: boolean;
  failed: boolean;
}

export const LevelBar = ({ level, paid, failed }: LevelBarProps) => {
  const color = paid
    ? baseTheme.colors.success
    : failed
    ? baseTheme.colors.error
    : baseTheme.colors.second;

  return (
    <StyledLevelBar>
      <Level
        color={color}
        className={level >= 0 ? "active" : ""}
        style={{ zIndex: "1" }}
      >
        <div className="right"></div>
      </Level>
      <Level
        color={color}
        className={level >= 1 ? "active" : ""}
        style={{ zIndex: "2" }}
      >
        <div className="right"></div>
        <div className="left"></div>
      </Level>
      <Level
        color={color}
        className={level === 2 ? "active" : ""}
        style={{ zIndex: "3" }}
      >
        <div className="right"></div>
        <div className="left"></div>
      </Level>
    </StyledLevelBar>
  );
};
