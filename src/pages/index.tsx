import type { NextPage } from 'next'
import Head from 'next/head'

import { HomePage } from '~/features/home'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Cutest Pokémon</title>
    </Head>
    <HomePage />
  </>
)
export default Home
