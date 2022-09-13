import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const Svg = styled.svg`
  fill: ${colors.text.base};
  width: 3rem;
  position: absolute;
  margin: 1rem 0;
  z-index: 99;
  cursor: pointer;
`
