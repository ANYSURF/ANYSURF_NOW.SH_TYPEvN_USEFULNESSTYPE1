import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* body {
    margin: 0;
  } */
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle/>
      {children}
    </React.Fragment>
  )
}