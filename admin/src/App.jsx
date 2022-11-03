import React from 'react'
import Header from './component/Header'
import SideNav from './component/SideNav'
import AddProduct from './component/AddProduct'
import OrderPage from './component/OrderPage'
import Login from './component/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './component/Dashboard'
import AllProduct from './component/AllProduct/AllProduct'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <div className='grid grid-cols-12 min-h-[90vh]'>
        <SideNav />

        <div className='grid grid-cols-1 col-span-10 ml-8 p-2'>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/addProduct/:id" element={<AddProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allProducts" element={<AllProduct />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>




    </BrowserRouter>
  )
}

export default App