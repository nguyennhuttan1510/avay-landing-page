import '../styles/globals.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  const Layout  = Component.Layout || EmptyLayout
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const EmptyLayout = ({children}) => {
  return(
    <>
      {children}
    </>
  )
}

export default MyApp
