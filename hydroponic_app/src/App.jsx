import './App.css'
import Routers from './Pages/Routers'
import WithAction from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="App">
      <WithAction />
      <Routers />
      <Footer />
    </div>
  )
}

export default App
