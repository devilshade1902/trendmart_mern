import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Product_details from './components/Product_details/Product_details'
import Categories from './components/categories/Categories'
import Cart from './components/Cart/Cart'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Categories />} />
            <Route path='/products/:id' element={<Product_details />} />
            <Route path="/products" element={<Categories />} />
            <Route path="/products/mens" element={<Categories category="mens" />} />
            <Route path="/products/womens" element={<Categories category="womens" />} />
            <Route path="/products/kids" element={<Categories category="kids" />} />
            <Route path="/products/electronics" element={<Categories category="electronics" />} />
            <Route path='/cart' element={<Cart />} />
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/signup' element = {<Signup/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
