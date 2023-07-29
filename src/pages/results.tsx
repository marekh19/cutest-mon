import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
  Votes,
} from '~/features/results/parts/PokemonListing/styled'
import { Back } from '~/features/results/parts/Back'
import { Routes } from '~/utils/routes'
import Head from 'next/head'

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
          alt={pokemon.name}
          width={64}
          height={64}
          layout="fixed"
        />
        <Name>{pokemon.name}</Name>
      </Pokemon>
      <Rating>
        {generateCutenessPercentage(pokemon).toFixed(2)}&nbsp;%{' '}
        <Votes>
          ({pokemon._count.VoteFor}&nbsp;|&nbsp;{pokemon._count.VoteAgainst})
        </Votes>
      </Rating>
      <Rank>{rank + '.'}</Rank>
    </ResultsRow>
  )
}

const ResultsPage: NextPage<{
  pokemon: AsyncReturnType<typeof getPokemonInOrder>
}> = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>Results | Cutest Pokémon</title>
      </Head>
      <Main>
        <H1>Results</H1>
        <Link href={Routes.HOME}>
          <a>
            <Back />
          </a>
        </Link>
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
    </>
  )
}

export default ResultsPage

export const getStaticProps: GetServerSideProps = async () => {
  const pokemonOrdered = await getPokemonInOrder()
  return { props: { pokemon: pokemonOrdered }, revalidate: 60 }
}
