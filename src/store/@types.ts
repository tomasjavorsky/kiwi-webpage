export interface t9ReducerTypes {
  numbersPressed: number[];
  receivedWords: string[];
  error: boolean;
  loading: boolean;
}

interface ReduxTypes {
  t9Reducer: t9ReducerTypes;
}

export default ReduxTypes;
