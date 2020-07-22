import React from "react"
import Main from '../components/main'
import Nav from '../components/nav'
import Helmet from 'react-helmet'


 
export default function Home() {
  return (
    <div className='container-fluid'>
      <div className='app'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>The Gentiles</title>
        </Helmet>
      </div>
      <Nav />
      <Main />
    </div>
  )
}
