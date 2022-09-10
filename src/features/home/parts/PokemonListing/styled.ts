import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const PokemonWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > p {
    ${typography.paragraph.large}
    text-transform: capitalize;
  }
`

export const VoteButton = styled.button`
  ${typography.paragraph.large}
  background: transparent;
  cursor: pointer;
  border: 1px solid ${colors.accent.blue};
  border-radius: 1rem;
  padding: 1rem 2rem;
  color: ${colors.accent.blue};
  text-transform: capitalize;
  transition: all 0.2s;

  &:hover {
    background: ${colors.accent.blue};
    color: ${colors.text.inverted};
  }
`
