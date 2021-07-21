import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import { Footer, Header } from 'components/sections'
import GlobalStyle from 'theme/globalStyles'
import Reset from 'theme/reset'
import { theme } from 'theme'
import { Container } from 'components/layout'

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
  const siteData = data.site.siteMetadata;

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