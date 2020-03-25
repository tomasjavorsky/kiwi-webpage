import React, { useEffect, useState } from "react";
import {
  Wrapper,
  DisplayContainer,
  DisplayScreen,
  ButtonContainer,
  OffsetButton
} from "./styled";
import ReduxTypes from "../../store/@types";
import {
  selectError,
  selectReceivedWords,
  selectLoading,
  selectNumbersPressed
} from "../../store/selectors";
import { connect } from "react-redux";
import { getWords } from "../../store/t9Words/actions";
import useKeyPress from "../../hooks/useKeyPress";
import { offsetStep } from "../../constants";

interface StateProps {
  numbersPressed: number[];
  receivedWords: string[];
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  getWords: typeof getWords;
}

interface Props extends StateProps, DispatchProps {}

const Display = ({
  getWords,
  numbersPressed,
  receivedWords,
  loading,
  error
}: Props) => {
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    if (numbersPressed.length) {
      getWords(numbersPressed, offset);
    } else {
      setOffset(0);
      getWords(numbersPressed, offset);
    }
  }, [numbersPressed, offset]);

  const changeOffset = (increase: boolean) => {
    if (increase) {
      if (receivedWords.length >= offsetStep) {
        setOffset(offset + offsetStep);
      }
    } else {
      setOffset(Math.max(0, offset - offsetStep));
    }
  };

  return (
    <Wrapper>
      <DisplayContainer>
        <DisplayScreen>
          {error && "Error, please try again."}
          {loading && "Loading..."}
          {!loading &&
            !error &&
            receivedWords &&
            receivedWords?.map(word => `${word} `)}
        </DisplayScreen>
      </DisplayContainer>
      <ButtonContainer>
        <OffsetButton isPressed={false} onClick={() => changeOffset(false)}>
          {"<"}
        </OffsetButton>
        <div>{`${offset} - ${receivedWords.length + offset}`}</div>
        <OffsetButton isPressed={false} onClick={() => changeOffset(true)}>
          {">"}
        </OffsetButton>
      </ButtonContainer>
    </Wrapper>
  );
};

const mapStateToProps = (state: ReduxTypes) => {
  return {
    numbersPressed: selectNumbersPressed(state),
    receivedWords: selectReceivedWords(state),
    loading: selectLoading(state),
    error: selectError(state)
  };
};

export default connect(mapStateToProps, { getWords })(Display);
