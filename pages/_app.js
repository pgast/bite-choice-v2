import '@/styles/globals.css'
import './styles/landing.css'
import './styles/results.css'
import './styles/listItem.css'
import './styles/choiceView.css'
import './styles/errorScreen.css'
import './styles/customFormView.css'
import { StoreProvider } from '@/store'

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
