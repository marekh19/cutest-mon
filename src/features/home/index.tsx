import type { FC } from 'react'
import { useState } from 'react'

import { Layout, H1, DuelWrapper, Footer } from './styled'
import { GithubIcon } from './parts/GithubIcon'
import { PokemonListing } from './parts/PokemonListing'

import { trpc } from '~/utils/trpc'
import { getOptionsForVote } from '~/utils/getRandomPokemon'

export const Homepage: FC = () => {
  const [ids, updateIds] = useState(() => getOptionsForVote())
  const [first, second] = ids

  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: first }])
  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: second }])

  const voteMutation = trpc.useMutation(['cast-vote'])

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null

  const voteForCutest = (selected: number) => {
    if (selected === first) {
      voteMutation.mutate({ votedFor: first, votedAgainst: second })
    } else {
      voteMutation.mutate({ votedFor: second, votedAgainst: first })
    }
    updateIds(getOptionsForVote())
  }

  return (
    <>
      <Layout>
        <H1>Which Pokémon is Cutest?</H1>
        <DuelWrapper>
          {!firstPokemon.isLoading &&
            firstPokemon.data &&
            !secondPokemon.isLoading &&
            secondPokemon.data && (
              <>
                <PokemonListing
                  pokemon={firstPokemon.data}
                  vote={() => voteForCutest(first)}
                />
                <p>vs.</p>
                <PokemonListing
                  pokemon={secondPokemon.data}
                  vote={() => voteForCutest(second)}
                />
              </>
            )}
        </DuelWrapper>
      </Layout>
      <Footer>
        <a
          href="https://github.com/marekh19/cutest-mon"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </Footer>
    </>
  )
}
