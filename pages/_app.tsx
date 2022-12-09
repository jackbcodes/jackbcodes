import { AppProps } from 'next/app'
import '../styles/index.css'

import PlausibleProvider from 'next-plausible'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain='jackbcodes.com'>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </PlausibleProvider>
  )
}
