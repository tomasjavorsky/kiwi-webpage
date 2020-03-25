import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Display from ".";
import {
  rootReducer,
  storeWithoutMiddlewares as store
} from "../../store/configureStore";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../../constants/globalTheme";
import { OffsetButton } from "./styled";
import ReduxTypes from "../../store/@types";
import { T9Actions } from "../../store/t9Words/actions";


/*
 Na ukážku som spravil aj pár testov.
 Kľudne by som to pokryl aj na 100% coverage, ale už by som sa v typoch testov z velkej miery opakoval.
 Každopádne ak by bol záujem, kľudne to dokončím.
 */


const offsetClick = jest.fn();
let actions = [];

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  actions = [];

  store.replaceReducer((state: ReduxTypes, action) => {
    actions.push(action);
    switch (action.type) {
      case T9Actions.GET_T9_WORDS:
        return state;
      default:
        return rootReducer(state, action) as any;
    }
  });
});

describe("components/Display", () => {
  it("contains display screen", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Display />
        </ThemeProvider>
      </Provider>
    );
    expect(getByTestId("display screen")).toBeTruthy();
  });

  it("contains offset buttons", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Display />
        </ThemeProvider>
      </Provider>
    );
    expect(getByTestId("offset button 1")).toBeTruthy();
    expect(getByTestId("offset button 2")).toBeTruthy();
  });

  it("registers on click action on offset buttons", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <OffsetButton
            data-testid="offset button 1"
            isPressed={false}
            onClick={offsetClick}
          />
        </ThemeProvider>
      </Provider>
    );
    fireEvent.click(getByTestId("offset button 1"));
    expect(offsetClick.mock.calls.length).toBe(1);
  });

  it("dispatches getWords action on offset button click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Display />
        </ThemeProvider>
      </Provider>
    );
    fireEvent.click(getByTestId("offset button 1"));
    expect(actions[actions.length - 1].type).toBe(T9Actions.GET_T9_WORDS);
  });
});
