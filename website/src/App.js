import React from 'react'
import {Footer, Blog, Features, WhatAlgoByte, Header, Team, Contact} from './containers';
import {Nav} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
        <div className='gradient__bg'>
            <Header />
        </div>
        <WhatAlgoByte />
        <Features />
        <Blog />
        {/* <Team /> */}
        <Contact />
        <Footer />
    </div>
  )
}

export default App