import { Provider } from 'react-redux'
import { useStore } from '../store'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
    const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}