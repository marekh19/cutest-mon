import type { FC, ReactNode } from 'react'

import { Wrapper } from './styled'

type Props = {
  id: number
}

export const PokemonCard: FC<Props> = ({ id }) => (
  <Wrapper>
    <p>Pokemon {id}</p>
  </Wrapper>
)
