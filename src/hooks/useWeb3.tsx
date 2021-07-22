import { useMoralis } from "./useMoralis";

export function useWeb3() {
  const { Moralis } = useMoralis();
  return {
    web3: async () => {
      return await Moralis.Web3.enable();
    },
  };
}