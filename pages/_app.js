import '@styles/styles.scss'
import 'normalize.css'
import 'animate.css'
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
