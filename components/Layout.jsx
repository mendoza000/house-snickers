import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from 'store/actions/products'
import Navbar from './Navbar'
import Splash from './Splash'

const Layout = ({children}) => {
  const [loading, setLoading] = useState(false)
  const dispath = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    const url = `${window.location.origin}/api/sneakers`
    fetch(url)
    .then(resp => resp.json())
    .then(data => dispath(getProducts(data)))
  }, [])

  return (
    <>
      <Head>
        <title>House Sneakers</title>
      </Head>
      {
        (!loading)
        ? (<main>
            {children}
            <Navbar />
          </main>)
        : <Splash />
      }
    </>
  )
}

export default Layout