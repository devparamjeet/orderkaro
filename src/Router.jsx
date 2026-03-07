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

let route = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/product",
    element : <Product />
  },
  {
    path : "/cart",
    element : <Cart />
  },
  {
    path : "/s",
    element : <Search />
  },
  {
    path : "/banner",
    element : <BannerPage />
  },
])

export default route