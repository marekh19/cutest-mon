import styled from 'styled-components'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const ResultsRow = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 2rem;
  border: 1px solid white;
  align-items: center;
  position: relative;
`

export const Pokemon = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.p`
  text-transform: capitalize;
  ${typography.paragraph.large}
  font-weight: bold;
  margin-right: 1rem;
`

export const Rating = styled.p`
  ${typography.paragraph.large}
`

export const Rank = styled.span`
  position: absolute;
  top: 0rem;
  left: 0rem;
  padding: 1rem;
  line-height: 1rem;
  border-radius: 1rem;
  ${typography.paragraph.large}
`
export const Votes = styled.span`
  ${typography.paragraph.small};
  ${colors.text.dimmed};
`
