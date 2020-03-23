import React from "react";
import {
  Wrapper,
  KeyboardContainer,
  KeyboardRow,
  KeyboardButton,
  ButtonContent,
  ButtonNumber,
  ButtonLetters,
} from "./styled";

interface Props {}

const Keyboard = (props: Props) => {
  return (
    <Wrapper>
      <KeyboardContainer>
        <KeyboardRow>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>1</ButtonNumber>
              <ButtonLetters>‎ ‎</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>2</ButtonNumber>
              <ButtonLetters>ABC</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>3</ButtonNumber>
              <ButtonLetters>DEF</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
        <KeyboardRow>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>4</ButtonNumber>
              <ButtonLetters>GHI</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>5</ButtonNumber>
              <ButtonLetters>JKL</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>6</ButtonNumber>
              <ButtonLetters>MNO</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
        <KeyboardRow>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>7</ButtonNumber>
              <ButtonLetters>PQRS</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>8</ButtonNumber>
              <ButtonLetters>TUV</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>9</ButtonNumber>
              <ButtonLetters>WXYZ</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
        <KeyboardRow>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>*</ButtonNumber>
              <ButtonLetters> ‎</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>0</ButtonNumber>
              <ButtonLetters> ‎</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton>
            <ButtonContent>
              <ButtonNumber>#</ButtonNumber>
              <ButtonLetters> ‎</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
      </KeyboardContainer>
    </Wrapper>
  );
};

export default Keyboard;
