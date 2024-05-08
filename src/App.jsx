import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer productsTitle="Productos" />} />
        <Route path="/category/:idCategory" element={<ItemListContainer productsTitle="Productos" />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App