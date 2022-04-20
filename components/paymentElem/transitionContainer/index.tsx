import { ReactElement, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Wrapper } from "./styled";

interface TransitionContainerProps {
  level: number;
  children: ReactElement;
}

export const TransitionContainer = ({
  level,
  children,
}: TransitionContainerProps) => {
  const nodeRef = useRef<null | HTMLDivElement>(null);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={level}
        addEndListener={(done) =>
          nodeRef.current!.addEventListener("transitionend", done, false)
        }
        classNames="fade"
        nodeRef={nodeRef}
      >
        <Wrapper ref={nodeRef}>{children}</Wrapper>
      </CSSTransition>
    </SwitchTransition>
  );
};
