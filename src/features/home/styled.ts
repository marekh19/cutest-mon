import styled from 'styled-components'
import { colors } from '../ui/theme/colors'

import { typography } from '../ui/theme/typography'

export const Layout = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const DuelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  max-width: 80rem;
  margin: 0 2rem;
  padding: 1.2rem;
`

export const H1 = styled.h1`
  ${typography.heading.h2}
  margin-bottom: 2rem;
`

export const Footer = styled.footer`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2.5rem;
  height: 2.5rem;
`

export const ResultsButton = styled.button`
  ${typography.paragraph.large}
  margin-top: 3rem;
  background: ${colors.accent.blue};
  cursor: pointer;
  border: 1px solid ${colors.accent.blue};
  border-radius: 1rem;
  padding: 1rem 2rem;
  color: ${colors.text.inverted};
  transition: all 0.2s;

  &:hover {
    background: transparent;
    color: ${colors.accent.blue};
  }
`
