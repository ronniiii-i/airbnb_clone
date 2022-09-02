import group from './images/group.png';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"


export default function App() {
  return (
      <div className="container">
          <Navbar />
          <main>
            <Hero />
          </main>
      </div>
  )
}
