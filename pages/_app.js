import '@/styles/globals.css'
import './styles/landing.css'
import { StoreProvider } from '@/pages/store'

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
