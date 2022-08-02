import {Provider} from 'react-redux';
import 'normalize.css'
import 'animate.css'
import '@styles/styles.scss'

import Layout from '@components/Layout'
import { store } from 'store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
