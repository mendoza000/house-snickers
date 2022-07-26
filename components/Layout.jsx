import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Splash from './Splash'

const Layout = ({children}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>House Sneakers</title>
      </Head>
      {
        (!loading)
        ? (<main>
            <Navbar />
            {children}
          </main>)
        : <Splash />
      }
    </>
  )
}

export default Layout