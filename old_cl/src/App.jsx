import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CategoryDetails from './pages/Category/CategoryDetails';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Order from './pages/Orders/Order';
import Payment from './pages/Payment/Payment';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Signup from './pages/Signup/Signup';
import Success from './pages/Success/Success';

const Layout = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = 'https://mern-ecommerce-tailwind.vercel.app/';
    }, countdown * 1000);

    return () => clearTimeout(timeoutId);
  }, [countdown]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-8 rounded-md text-center'>
        <p>This site has been moved and built with Next.js.</p>
        <p>Redirecting in {countdown} seconds...</p>
      </div>
    </div>
  );
};

// const Layout = () => {
//   return (
//     <div className="">
//       <Navbar />
//       <Outlet />
//       <Footer />
//       <ToastContainer />
//     </div>
//   );
// };

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/store',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/store/:name',
        element: <CategoryDetails />,
      },
      {
        path: 'checkout',
        element: <Payment />,
      },
      {
        path: 'my-order',
        element: <Order />,
      },
      {
        path: 'success',
        element: <Success />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
