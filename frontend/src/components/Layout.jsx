import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div>
        <Header/>
        <main className='container'>{props.children}</main>
        <Footer/>
    </div>
  )
}
