import React,{ useState } from 'react';
import * as Styled from "./styles";
import { useAuth } from 'hooks/useAuth';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { smartTrim, networkIdToName, NetworkId } from 'utils';
import { useWeb3 } from 'hooks/useWeb3';
import { useEffect } from 'react';

export const ConnectButton = () => {
  const { currentUser, login, logout } = useAuth();
  const { web3 } = useWeb3();
  const [ user, setUser ] = useState(currentUser());
  const [ networkName, setNetworkName ] = useState("")

  const getNetworkName = async () => {
    const res = await web3();
    const network = await res.eth.net.getId() as NetworkId;
    const name = networkIdToName[network];
    setNetworkName(name);
    return name;
  }

  const handleLogin = async () => {
    await login();
    setUser(currentUser())
  }

  const handleLogout = async () => {
    await logout();
    setUser(currentUser())
  }

  useEffect(() => {
    getNetworkName();
  }, [])

  if (!user) {
    return (
      <Styled.ConnectButton onClick={() => handleLogin()}>
        Connect
      </Styled.ConnectButton>
    )
  }
  return (
    <Styled.Button onClick={() => handleLogout()}>
      <Jazzicon diameter={26} seed={jsNumberForAddress(user.attributes.accounts[0])} />
      <Styled.ConnectedDetails>
        <p>{networkName}</p>
        <p>
          {smartTrim(user.attributes.accounts[0], 8)}
        </p>
      </Styled.ConnectedDetails>
    </Styled.Button>
  )
}