import type { AppProps } from 'next/app'

import '../sass/Main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
