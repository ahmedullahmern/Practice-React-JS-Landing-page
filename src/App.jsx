// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import data1 from './webData';
import Header from './components/Heaader';
import Hero from './components/Hero';
import Features from './components/Feature';
// import Header from './components/header';

function App() {
  // console.log("data1==>", data1);
  const { header, hero, features } = data1
  // const [count, setCount] = useState(0)
  return (
    <>
      <Header header={header} />
      <Hero hero={hero} />
      <Features features={features} />
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

    </>
  )
}

export default App
