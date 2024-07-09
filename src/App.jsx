import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,

    },
    {
      path: 'contact',
      element: <div>Contact Us</div>,

    },
    {
      path: 'shop',
      element: <div>Shop</div>

    },
    {
      path: 'cart',
      element: <Cart />,

    },
    {
      path: 'payment',
      element: <Payment />,

    },

  ]);
  

  return <RouterProvider router={router} />
}

export default App;
