import group from './images/group.png';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


export default function App() {
  return (
      <div className="container">
          <Navbar />
          <main>
            <Hero />
            <Card />
          </main>
      </div>
  )
}
