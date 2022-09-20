// import group from './images/group.png';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import katie from './images/katie-zaferes.png';
import wedding from './images/wedding.png';
import bike from './images/bike.png';



export default function App() {
  return (
      <div className="container">
          <Navbar />
          <main>
            <Hero />
            <Card 
              img = {katie}
              rating="5.0"
              reviewcount={6}
              country="USA"
              title="Life Lessons with Katie"
              price={136}
              />
            <Card />
            <Card />
          </main>
      </div>
  )
}
