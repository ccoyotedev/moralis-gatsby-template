import React from "react";
import Web3ContextProvider from "./src/context/Web3Context";

export const wrapRootElement = ({ element }) => {
  return (
    <Web3ContextProvider>
      {element}
    </Web3ContextProvider>
  )
}