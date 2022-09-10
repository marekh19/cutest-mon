import type { FC } from 'react'
import Image from 'next/image'

import { inferQueryResponse } from '~/pages/api/trpc/[trpc]'

import { PokemonWrapper, VoteButton } from './styled'

type PokemonFromServer = inferQueryResponse<'get-pokemon-by-id'>

export const PokemonListing: FC<{
  pokemon: PokemonFromServer
  vote: () => void
}> = (props) => {
  return (
    <PokemonWrapper>
      <Image
        src={props.pokemon.spriteUrl}
        width="150%"
        height="150%"
      />
      <VoteButton onClick={() => props.vote()}>{props.pokemon.name}</VoteButton>
    </PokemonWrapper>
  )
}
