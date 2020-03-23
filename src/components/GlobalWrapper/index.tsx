import React, { ReactNode } from "react";
import { Wrapper } from "./styled";

interface Props {
  children: ReactNode;
}

const GlobalWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default GlobalWrapper;
