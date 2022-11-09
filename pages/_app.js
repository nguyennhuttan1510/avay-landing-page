import '../styles/globals.scss'
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
