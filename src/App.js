import Header from './components/Header.jsx'
import Title from './components/Title'
import Filter from './components/Filter'
import Airlines from './components/Airlines'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title />
        <Filter />
        <Airlines />
      </div>
    </div>
  )
}

export default App
