import styled from 'styled-components'

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
  margin-bottom: 3rem;
`

export const Footer = styled.footer`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2.5rem;
  height: 2.5rem;
`
