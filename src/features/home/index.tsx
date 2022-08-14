import type { FC } from 'react'

import { Layout, H1, DuelWrapper } from './styled'
import { PokemonCard } from './parts/PokemonCard'

export const Homepage: FC = () => (
  <Layout>
    <H1>Which Pokémon is Rounder?</H1>
    <DuelWrapper>
      <div>
        <PokemonCard />
        <button>Roundest</button>
      </div>
      <p>vs.</p>
      <div>
        <PokemonCard />
        <button>Roundest</button>
      </div>
    </DuelWrapper>
  </Layout>
)
