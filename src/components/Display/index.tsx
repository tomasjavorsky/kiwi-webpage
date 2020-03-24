import React, { useEffect } from "react";
import { Wrapper, DisplayContainer, DisplayScreen } from "./styled";
import ReduxTypes from "../../store/@types";
import {
  selectError,
  selectReceivedWords,
  selectLoading,
  selectNumbersPressed
} from "../../store/selectors";
import { connect } from "react-redux";
import { getWords } from "../../store/t9Words/actions";

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
  useEffect(() => {
    if (numbersPressed) {
      console.log(numbersPressed);
      getWords(numbersPressed);
    }
  }, [numbersPressed]);

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
