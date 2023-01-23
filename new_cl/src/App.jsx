import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CategoryDetails from "./pages/Category/CategoryDetails";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Signup from "./pages/Signup/Signup";
import Payment from "./pages/Payment/Payment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from "./pages/Orders/Order";
import Logout from "./pages/Logout/Logout";
import Success from "./pages/Success/Success";


const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/store/:name",
        element: <CategoryDetails />,
      },
      {
        path: "checkout",
        element: <Payment />,
      },
      {
        path: "my-order",
        element: <Order />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
