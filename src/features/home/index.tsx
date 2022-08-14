import type { FC } from 'react'

import { Layout, H1, DuelWrapper } from './styled'
import { PokemonCard } from './parts/PokemonCard'
import { trpc } from '~/utils/trpc'

export const Homepage: FC = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'Marek' }])

  if (isLoading) return <p>Loading...</p>

  if (data) return <p>{data.greeting}</p>
  return (
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
}
