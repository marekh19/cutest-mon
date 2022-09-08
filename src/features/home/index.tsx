import type { FC } from 'react'
import { useState } from 'react'
import Image from 'next/image'

import { Layout, H1, DuelWrapper, PokemonWrapper, VoteButton } from './styled'
import { trpc } from '~/utils/trpc'
import { getOptionsForVote } from '~/utils/getRandomPokemon'

export const Homepage: FC = () => {
  const [ids, updateIds] = useState(() => getOptionsForVote())
  const [first, second] = ids

  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: first }])
  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: second }])

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null

  const voteForCutest = (id: number) => {
    // TODO: fire mutation to persist changes
  }

  return (
    <Layout>
      <H1>Which Pokémon is Cutest?</H1>
      <DuelWrapper>
        <PokemonWrapper>
          <Image
            src={firstPokemon.data?.sprites.front_default || ''}
            width="140%"
            height="140%"
          />
          <VoteButton onClick={() => voteForCutest(first)}>
            {firstPokemon.data?.name}
          </VoteButton>
        </PokemonWrapper>
        <p>vs.</p>
        <PokemonWrapper>
          <Image
            src={secondPokemon.data?.sprites.front_default || ''}
            width="140%"
            height="140%"
          />
          <VoteButton onClick={() => voteForCutest(second)}>
            {secondPokemon.data?.name}
          </VoteButton>
        </PokemonWrapper>
      </DuelWrapper>
    </Layout>
  )
}
