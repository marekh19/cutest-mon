import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import { FC } from 'react'

import { prisma } from '~/backend/utils/prisma'
import { AsyncReturnType } from '~/utils/ts-bs'

import { Main, H1 } from '~/features/results/styled'
import {
  ResultsRow,
  Pokemon,
  Name,
  Rating,
  Rank,
} from '~/features/results/parts/PokemonListing/styled'

const getPokemonInOrder = async () => {
  return await prisma.pokemon.findMany({
    orderBy: { VoteFor: { _count: 'desc' } },
    select: {
      id: true,
      name: true,
      spriteUrl: true,
      _count: {
        select: {
          VoteFor: true,
          VoteAgainst: true,
        },
      },
    },
  })
}

type PokemonQueryResult = AsyncReturnType<typeof getPokemonInOrder>

const generateCutenessPercentage = (pokemon: PokemonQueryResult[number]) => {
  const { VoteFor, VoteAgainst } = pokemon._count
  if (VoteFor + VoteAgainst === 0) {
    return 0
  }
  return (VoteFor / (VoteFor + VoteAgainst)) * 100
}

const PokemonListing: FC<{
  pokemon: PokemonQueryResult[number]
  rank: number
}> = ({ pokemon, rank }) => {
  return (
    <ResultsRow>
      <Pokemon>
        <Image
          src={pokemon.spriteUrl}
          width={64}
          height={64}
        />
        <Name>{pokemon.name}</Name>
      </Pokemon>
      <Rating>{generateCutenessPercentage(pokemon).toFixed(2) + ' %'}</Rating>
      <Rank>{rank + '.'}</Rank>
    </ResultsRow>
  )
}

const ResultsPage: NextPage<{
  pokemon: AsyncReturnType<typeof getPokemonInOrder>
}> = ({ pokemon }) => {
  return (
    <Main>
      <H1>Results</H1>
      {pokemon.map((currentPokemon, index) => {
        return (
          <PokemonListing
            pokemon={currentPokemon}
            key={index}
            rank={index + 1}
          />
        )
      })}
    </Main>
  )
}

export default ResultsPage

export const getStaticProps: GetServerSideProps = async () => {
  const pokemonOrdered = await getPokemonInOrder()
  return { props: { pokemon: pokemonOrdered }, revalidate: 60 }
}
