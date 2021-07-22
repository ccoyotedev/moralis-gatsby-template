import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import { Footer, Header } from 'components/sections'
import GlobalStyle from 'theme/globalStyles'
import Reset from 'theme/reset'
import { theme } from 'theme'
import { useWeb3, updateWeb3 } from "context/Web3Context";
import { Container } from 'components/layout'
import { useEffect } from 'react'
import { useMoralis } from "hooks/useMoralis";

interface LayoutProps {
  children: React.ReactNode;
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    };
  };
}

const Layout = ({children, data}: LayoutProps) => {
  const { Moralis } = useMoralis();
  const { state: { web3 }, dispatch } = useWeb3();

  useEffect(() => {
    if (web3 === undefined) {
      updateWeb3(dispatch, Moralis);
    }
  }, [web3])

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

interface Props {
  children: React.ReactNode
}

export default (props:Props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  )
}

// TODO: Fetch site and blog data