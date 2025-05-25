import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <div className="container">
        <NavBar />
        <ItemListContainer text='Bueno, hola es la primera vez que hago esto, todavia no se nombre ponerle a la pagina'/>
      </div>
    </>
  )
}

export default App