import type { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Layout, H1, DuelWrapper, Footer, ResultsButton } from './styled'
import { GithubIcon } from './parts/GithubIcon'
import { PokemonListing } from './parts/PokemonListing'

import { trpc } from '~/utils/trpc'
import { Routes } from '~/utils/routes'

export const HomePage: FC = () => {
  const {
    data: pokemonPair,
    refetch,
    isLoading,
  } = trpc.useQuery(['get-pokemon-pair'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  const voteMutation = trpc.useMutation(['cast-vote'])

  const voteForCutest = (selected: number) => {
    if (!pokemonPair) return

    if (selected === pokemonPair?.firstPokemon.id) {
      // If voted for first pokemon, fire voteFor with first ID
      voteMutation.mutate({
        votedFor: pokemonPair.firstPokemon.id,
        votedAgainst: pokemonPair.secondPokemon.id,
      })
    } else {
      // Else fire voteFor with second ID
      voteMutation.mutate({
        votedFor: pokemonPair.secondPokemon.id,
        votedAgainst: pokemonPair.firstPokemon.id,
      })
    }

    refetch()
  }

  const fetchingNext = voteMutation.isLoading || isLoading

  return (
    <>
      <Layout>
        <H1>Which Pokémon is Cutest?</H1>
        {pokemonPair && (
          <DuelWrapper>
            <PokemonListing
              pokemon={pokemonPair.firstPokemon}
              vote={() => voteForCutest(pokemonPair.firstPokemon.id)}
              disabled={fetchingNext}
            />
            <p>vs.</p>
            <PokemonListing
              pokemon={pokemonPair.secondPokemon}
              vote={() => voteForCutest(pokemonPair.secondPokemon.id)}
              disabled={fetchingNext}
            />
          </DuelWrapper>
        )}
        {!pokemonPair && (
          <Image
            src="/rings.svg"
            width={128}
            height={128}
            alt="loading"
            unoptimized
          />
        )}
        <Link href={Routes.RESULTS}>
          <ResultsButton>Results</ResultsButton>
        </Link>
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
