import Page from '../components/page'
import { initializeStore } from '../store'
import Head from 'next/head'
import Layout from '../components/layout'

export default function SSR() {
  return <Layout>
      <Head>
        <title>Server side rendering, init</title>
      </Head>
      <Page />
      </Layout>
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  dispatch({
    type: 'TICK',
    light: false,
    lastUpdate: Date.now(),
  })

  return { props: { initialReduxState: reduxStore.getState() } }
}