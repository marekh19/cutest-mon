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
  width: 100%;
  max-width: 100rem;
  border: 1px solid ${colors.text.base};
  border-radius: 1rem;
  padding: 1.2rem;
`

export const H1 = styled.h1`
  ${typography.heading.h2}
  margin-bottom: 3rem;
`
