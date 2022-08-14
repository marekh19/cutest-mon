import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'
import { font } from './typography'

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
  html, body, #__next {
    padding: 0;
    height: 100%;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-weight: 400;
    font-size: 1.6rem;
    font-family: ${font.base};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
    background-color: ${colors.background.main};
    color: ${colors.text.base};
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  &:focus {
    outline: none;
  }
  
  &:not(input):focus-visible {
    outline: 3px solid ${colors.accent.blue};
  }
`
