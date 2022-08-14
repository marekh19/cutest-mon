import type { FC } from 'react'

import { Layout, H1, DuelWrapper } from './styled'
import { PokemonCard } from './parts/PokemonCard'
import { trpc } from '~/utils/trpc'
import { getOptionsForVote } from '~/utils/getRandomPokemon'

export const Homepage: FC = () => {
  const [first, second] = getOptionsForVote()

  return (
    <Layout>
      <H1>Which Pokémon is Rounder?</H1>
      <DuelWrapper>
        <div>
          <PokemonCard key={first} id={first} />
          <button>Roundest</button>
        </div>
        <p>vs.</p>
        <div>
          <PokemonCard key={second} id={second} />
          <button>Roundest</button>
        </div>
      </DuelWrapper>
    </Layout>
  )
}
