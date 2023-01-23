import React from "react";
import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import SideNav from "./components/Sidenav/SideNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Product/Products";
import AddNewProduct from "./pages/Product/AddNew";
import Details from "./pages/Product/Details";
import Orders from "./pages/Orders/Orders";
import AddCategories from "./pages/Categories/AddCategories";
import User from "./pages/User/User";
import Header from "./components/Herader/Header";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import PrivateRoutes from "./utils/PrivateRoutes";
import Loading from "./components/Loading/Loading";
import OrderDetails from "./components/Order/OrderDetails";

const Layout = () => {
  return (
    <div className="flex gap-5">
      <SideNav />
      <Header />
      <PrivateRoutes />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products/",
        element: <Products />,
      },
      {
        path: "/products/add-new-product",
        element: <AddNewProduct />,
      },
      {
        path: "/products/add-new-product/:id",
        element: <AddNewProduct />,
      },
      {
        path: "/products/details/:id",
        element: <Details />,
      },
      {
        path: "/order",
        element: <Orders />,
      },
      {
        path: "/orders/order-details/:id",
        element: <OrderDetails />,
      },
      {
        path: "/category",
        element: <AddCategories />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },

  {
    path: "/login",
    element: <SignIn />,
  },

  {
    path: "/register",
    element: <SignUp />,
  },
]);

const App = () => {



  return <RouterProvider router={router} />;
};

export default App;
