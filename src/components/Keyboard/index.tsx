import React from "react";
import {
  Wrapper,
  KeyboardContainer,
  KeyboardRow,
  KeyboardButton,
  ButtonContent,
  ButtonNumber,
  ButtonLetters
} from "./styled";
import useKeyPress from "../../hooks/useKeyPress";

interface Props {}

const Keyboard = (props: Props) => {
  const onePressed = useKeyPress("1");
  const twoPressed = useKeyPress("2");
  const threePressed = useKeyPress("3");
  const fourPressed = useKeyPress("4");
  const fivePressed = useKeyPress("5");
  const sixPressed = useKeyPress("6");
  const sevenPressed = useKeyPress("7");
  const eightPressed = useKeyPress("8");
  const ninePressed = useKeyPress("9");
  const zeroPressed = useKeyPress("0");

  return (
    <Wrapper>
      <KeyboardContainer>
        <KeyboardRow>
          <KeyboardButton isPressed={onePressed}>
            <ButtonContent>
              <ButtonNumber>1</ButtonNumber>
              <ButtonLetters>‎ ‎</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={twoPressed}>
            <ButtonContent>
              <ButtonNumber>2</ButtonNumber>
              <ButtonLetters>ABC</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={threePressed}>
            <ButtonContent>
              <ButtonNumber>3</ButtonNumber>
              <ButtonLetters>DEF</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
        <KeyboardRow>
          <KeyboardButton isPressed={fourPressed}>
            <ButtonContent>
              <ButtonNumber>4</ButtonNumber>
              <ButtonLetters>GHI</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={fivePressed}>
            <ButtonContent>
              <ButtonNumber>5</ButtonNumber>
              <ButtonLetters>JKL</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={sixPressed}>
            <ButtonContent>
              <ButtonNumber>6</ButtonNumber>
              <ButtonLetters>MNO</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
        <KeyboardRow>
          <KeyboardButton isPressed={sevenPressed}>
            <ButtonContent>
              <ButtonNumber>7</ButtonNumber>
              <ButtonLetters>PQRS</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={eightPressed}>
            <ButtonContent>
              <ButtonNumber>8</ButtonNumber>
              <ButtonLetters>TUV</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={ninePressed}>
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
          <KeyboardButton isPressed={zeroPressed}>
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
