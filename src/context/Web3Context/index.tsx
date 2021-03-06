import React, { createContext, useReducer, useContext } from "React";
import { State, initialState } from "./initialState";
import { Action, reducer } from "./reducer";

const Web3Context = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const updateWeb3 = async (dispatch: React.Dispatch<Action>, moralis: any) => {
  dispatch({ type: "START_ASYNC" });
  try {
    const web3 = await moralis.Web3.enable();
    dispatch({ type: "SET_WEB3", web3 });
    const networkId = await web3.eth.net.getId();
    dispatch({ type: "SET_NETWORK_ID", networkId });
    dispatch({ type: "END_ASYNC" });
  } catch (error) {
    dispatch({ type: "SET_ERROR", error })
  }
}

const Web3ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};

const useWeb3 = () => useContext(Web3Context);

export default Web3ContextProvider;
export { useWeb3, updateWeb3 };
