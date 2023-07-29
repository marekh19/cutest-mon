import type { FC } from 'react'
import Image from 'next/image'

import { inferQueryResponse } from '~/pages/api/trpc/[trpc]'

import { PokemonWrapper, VoteButton } from './styled'

type PokemonFromServer = inferQueryResponse<'get-pokemon-pair'>['firstPokemon']

export const PokemonListing: FC<{
  pokemon: PokemonFromServer
  vote: () => void
  disabled: boolean
}> = (props) => {
  return (
    <PokemonWrapper>
      <Image
        src={props.pokemon.spriteUrl}
        width="150%"
        height="150%"
        alt={props.pokemon.name}
      />
      <VoteButton onClick={() => props.vote()} disabled={props.disabled}>
        {props.pokemon.name}
      </VoteButton>
    </PokemonWrapper>
  )
}
