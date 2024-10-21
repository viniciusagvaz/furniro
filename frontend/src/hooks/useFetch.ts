import { useReducer, useEffect } from "react";
import axios from "axios";

interface FetchState { 
  data: object | null;
  loading: boolean;
  error: object | null;
}

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state: FetchState, action) => {
  switch (action.type) {
    case "success":
      return { ...state, data: action.payload, loading: false };
    case "error":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export function useFetch(data: string) {
  const URL = `http://localhost:3000/${data}`;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        dispatch({ type: "success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error });
      });
  }, [URL]);

  return state;
}
