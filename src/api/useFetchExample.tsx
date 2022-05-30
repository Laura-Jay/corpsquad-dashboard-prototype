import axios from "axios";
import { useEffect, useReducer } from "react";

const ACTIONS = {
  INIT: "INIT",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default function useAxiosFetch(url: string, initialData: any) {
  const [state, dispatch] = useReducer(
    (state: any, action: { type: any; payload?: any }) => {
      switch (action.type) {
        case "INIT":
          return { ...state, isLoading: true, isError: false };
        case "SUCCESS":
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        case "ERROR":
          return { ...state, isLoading: false, isError: true };
      }
    },
    {
      isLoading: false,
      isError: false,
      data: initialData,
    }
  );

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetch = async () => {
      dispatch({ type: ACTIONS.INIT });

      try {
        const result = await axios(url);
        dispatch({ type: ACTIONS.SUCCESS, payload: result.data });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR });
      }
    };

    fetch();
  }, [url]);

  return state;
}
