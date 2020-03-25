import styled, { ThemeProps, DefaultTheme } from "styled-components";

export const Wrapper = styled.div``;

interface ButtonProps extends ThemeProps<DefaultTheme> {
  isPressed?: boolean;
  onClick?: (e)=>void;
}

export const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285px;
  height: 285px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 9px;
  box-shadow: 0 5px 10px 0px ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 20px;
`;

export const DisplayScreen = styled.div`
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  background-color: ${({ theme }) => theme.colors.lcdBG};
  border-radius: 9px;
  box-shadow: 0 0 5px 0px ${({ theme }) => theme.colors.dark} inset;
  padding: 5px;
  font-family: 'Inconsolata', monospace;
  word-wrap: break-word;
  line-height: 30px;
  overflow-y: scroll;
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 9px;
  box-shadow: 0 5px 10px 0px ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 20px;
`;

export const OffsetButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 9px;
  background: ${({ isPressed, theme }: ButtonProps) => isPressed?theme.colors.accent:theme.colors.light};
  box-shadow: ${({ isPressed, theme }) => isPressed? ('0 2px 5px 0px' + theme.colors.darkGray):('0 5px 5px 0px' + theme.colors.darkGray)} ;
  width: 30%;
  height: 25px;
  margin: 10px;
  :active {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 2px 5px 0px ${({ theme }) => theme.colors.darkGray};
  }
`;
