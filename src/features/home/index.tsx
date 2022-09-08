import type { FC } from 'react'
import { useState } from 'react'
import Image from 'next/image'

import { Layout, H1, DuelWrapper, PokemonWrapper } from './styled'
import { trpc } from '~/utils/trpc'
import { getOptionsForVote } from '~/utils/getRandomPokemon'

export const Homepage: FC = () => {
  const [ids, updateIds] = useState(() => getOptionsForVote())
  const [first, second] = ids

  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: first }])
  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: second }])

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null

  return (
    <Layout>
      <H1>Which Pokémon is Cuter?</H1>
      <DuelWrapper>
        <PokemonWrapper>
          <Image
            src={firstPokemon.data?.sprites.front_default}
            width="140%"
            height="140%"
          />
          <p>{firstPokemon.data?.name}</p>
        </PokemonWrapper>
        <p>vs.</p>
        <PokemonWrapper>
          <Image
            src={secondPokemon.data?.sprites.front_default}
            width="140%"
            height="140%"
          />
          <p>{secondPokemon.data?.name}</p>
        </PokemonWrapper>
      </DuelWrapper>
    </Layout>
  )
}
