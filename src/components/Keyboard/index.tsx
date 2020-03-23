import React, { useState, useEffect } from "react";
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
import { setNumberPressed } from "../../store/t9Words/actions";
import { connect } from "react-redux";

interface DispatchProps {
  setNumberPressed: typeof setNumberPressed;
}

interface Props extends DispatchProps {}

const Keyboard = ({ setNumberPressed }: Props) => {

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

  const handlePressed = (numberPressed: number) => {
    setNumberPressed(numberPressed)
  };

  useEffect(() => {
    switch (true) {
      case twoPressed: {
        handlePressed(2);
        break;
      }
      case threePressed: {
        handlePressed(3);
        break;
      }
      case fourPressed: {
        handlePressed(4);
        break;
      }
      case fivePressed: {
        handlePressed(5);
        break;
      }
      case sixPressed: {
        handlePressed(6);
        break;
      }
      case sevenPressed: {
        handlePressed(7);
        break;
      }
      case eightPressed: {
        handlePressed(8);
        break;
      }
      case ninePressed: {
        handlePressed(9);
        break;
      }
    }
  }, [
    onePressed,
    twoPressed,
    threePressed,
    fourPressed,
    fivePressed,
    sixPressed,
    sevenPressed,
    eightPressed,
    ninePressed
  ]);

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
          <KeyboardButton isPressed={twoPressed} onClick={()=>handlePressed(2)}>
            <ButtonContent>
              <ButtonNumber>2</ButtonNumber>
              <ButtonLetters>ABC</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={threePressed} onClick={()=>handlePressed(3)}>
            <ButtonContent>
              <ButtonNumber>3</ButtonNumber>
              <ButtonLetters>DEF</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
        <KeyboardRow>
          <KeyboardButton isPressed={fourPressed} onClick={()=>handlePressed(4)}>
            <ButtonContent>
              <ButtonNumber>4</ButtonNumber>
              <ButtonLetters>GHI</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={fivePressed} onClick={()=>handlePressed(5)}>
            <ButtonContent>
              <ButtonNumber>5</ButtonNumber>
              <ButtonLetters>JKL</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={sixPressed} onClick={()=>handlePressed(6)}>
            <ButtonContent>
              <ButtonNumber>6</ButtonNumber>
              <ButtonLetters>MNO</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
        </KeyboardRow>
        <KeyboardRow>
          <KeyboardButton isPressed={sevenPressed} onClick={()=>handlePressed(7)}>
            <ButtonContent>
              <ButtonNumber>7</ButtonNumber>
              <ButtonLetters>PQRS</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={eightPressed} onClick={()=>handlePressed(8)}>
            <ButtonContent>
              <ButtonNumber>8</ButtonNumber>
              <ButtonLetters>TUV</ButtonLetters>
            </ButtonContent>
          </KeyboardButton>
          <KeyboardButton isPressed={ninePressed} onClick={()=>handlePressed(9)}>
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

export default connect(null, { setNumberPressed })(Keyboard);
