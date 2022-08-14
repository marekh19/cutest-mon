import type { AppProps } from 'next/app'
import { GlobalStyle } from '~/features/ui/theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
