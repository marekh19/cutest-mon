import type { FC, ReactNode } from 'react'

import { Wrapper } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const PokemonCard: FC<Props> = ({ children }) => (
  <Wrapper>
    <p>Pokemon</p>
    {children}
  </Wrapper>
)
