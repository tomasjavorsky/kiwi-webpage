export interface t9Reducer {
  receivedWords: string;
  error: boolean;
  loading: boolean;
}

interface ReduxTypes {
  t9Reducer: t9Reducer;
}

export default ReduxTypes;
