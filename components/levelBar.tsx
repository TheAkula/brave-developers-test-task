import styled from "styled-components";

interface LevelBarProps {
  level: number;
  paid: boolean;
  failed: boolean;
}

const Level = styled.div`
  width: 33%;
  height: 100%;
  background-color: #ccc;
  position: relative;

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: inherit;
    background-color: ${(props) => props.color};
    width: 0%;
    transition: width 0.2s ease;
  }

  &.active::before {
    width: 100%;
  }

  .right {
    position: absolute;
    right: 0;
    top: 0;
    height: inherit;
  }

  .right::before {
    z-index: 10;
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 5px;
    background-image: linear-gradient(45deg, transparent 50%, #fff 50%);
  }

  .right::after {
    content: "";
    z-index: 10;
    display: block;
    position: absolute;
    right: 0;
    top: 5px;
    width: 5px;
    height: 5px;
    background-image: linear-gradient(135deg, transparent 50%, #fff 50%);
  }

  .left {
    position: absolute;
    left: 0;
    top: 0;
    height: inherit;
  }

  .left::before {
    z-index: 10;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 5px;
    background-image: linear-gradient(225deg, transparent 50%, #fff 50%);
  }

  .left::after {
    content: "";
    z-index: 10;
    display: block;
    position: absolute;
    left: 0;
    top: 5px;
    width: 5px;
    height: 5px;
    background-image: linear-gradient(320deg, transparent 50%, #fff 50%);
  }
`;

const StyledLevelBar = styled.div`
  display: flex;
  height: 10px;
  margin-bottom: 30px;
`;

const LevelBar = ({ level, paid, failed }: LevelBarProps) => {
  const color = paid ? "green" : failed ? "red" : "#ffef00";

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

export default LevelBar;
