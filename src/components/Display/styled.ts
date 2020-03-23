import styled from "styled-components";

export const Wrapper = styled.div``;

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
`;
