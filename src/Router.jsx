import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Timer from "./Timer";
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Search from './pages/Search';
import BannerPage from './pages/BannerPage';
import MainOutlet from './components/MainOutlet';
import Cateogry from './pages/Cateogry';

let route = createBrowserRouter([

  {
    path: "/",
    element: <MainOutlet />,
    children: [
      { index: true, element: <App /> },
      { path: "product", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "banner", element: <BannerPage /> },
      { path: "cateogry", element: <Cateogry /> },
    ]
  },
  {
    path: "/s",
    element: <Search />
  },
])

export default route