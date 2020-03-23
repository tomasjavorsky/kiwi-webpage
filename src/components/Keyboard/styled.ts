import styled from "styled-components";

export const Wrapper = styled.div``;

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 9px;
  box-shadow: 0 5px 10px 0px ${({ theme }) => theme.colors.darkGray};
`;

export const KeyboardRow = styled.div`
  display: flex;
`;

export const KeyboardButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: 0 5px 5px 0px ${({ theme }) => theme.colors.darkGray};
  flex: 1;
  width: 100px;
  height: 100px;
  margin: 10px;
  :active {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 2px 5px 0px ${({ theme }) => theme.colors.darkGray};
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ButtonNumber = styled.p`
  margin: 2px;
  font-size: 30px;
`;

export const ButtonLetters = styled.p`
  margin: 2px;
  font-size: 15px;
`;
