import React from "react";
import { Wrapper, DisplayContainer, DisplayScreen } from "./styled";

interface Props {
    
}

const Display = ({}: Props) => {
  return (
    <Wrapper>
      <DisplayContainer>
        <DisplayScreen>ab bc cd ef gh ij kl mn</DisplayScreen>
      </DisplayContainer>
    </Wrapper>
  );
};

export default Display;
