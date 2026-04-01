import './App.css'
import { Navbar, Hero, Gallery, Services, Programs } from './components'

function App() {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F4F6F8' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Hero />
        <Gallery />
        <Services />
        <Programs />
      </main>

      <footer style={{ padding: '2rem', backgroundColor: '#135162', color: 'white', textAlign: 'center' }}>
        <p>DataBloom Footer (Awaiting Builder.io Extract)</p>
      </footer>
    </div>
  )
}

export default App
