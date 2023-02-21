import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Nevigetion from './Nevigetion'


export default function Layout() {
  return (
    <>
        <Header>
            <Nevigetion/>
        </Header>
        <Main/>
        <Footer/>
    </>
  )
}
