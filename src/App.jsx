import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Chekout from './components/Chekout';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/chekout' element={<Chekout/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App