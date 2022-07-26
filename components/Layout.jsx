import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
      {/* <Navbar /> */}
      <Head>
        <title>House Sneakers</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout