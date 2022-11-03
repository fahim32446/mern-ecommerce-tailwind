import React from 'react'
import style from './style'
import HomePage from './pages/HomePage';
import NavMenu from './comp/NavMenu';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Cart from './comp/Cart.jsx'
import ProductPage from './pages/ProductPage';
import ProductLoading from './assets/loading/ProductLoading';
import ProductListLoading from './assets/loading/ProductListLoading';
import Login from './comp/Login';
import Reg from './comp/Reg';
import SuccessPage from './pages/SuccessPage';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import Order from './pages/Order';
import ProductList from './pages/ProductList';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const App = () => {

  const { user, email, accessToken } = useSelector((state) => state.userReducer.user)


  return (

    <BrowserRouter>
      <NavMenu />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product/:id" element={<ProductPage />} />
        <Route exact path="/loading" element={<ProductListLoading />} />
        <Route path="/login" element={accessToken ? <Navigate to="../" /> : <Login />} />
        <Route path="/registration" element={accessToken ? <Navigate to="../" /> : <Reg />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/product-list" element={<ProductList />} />


      </Routes>
    </BrowserRouter>



  )

}

export default App