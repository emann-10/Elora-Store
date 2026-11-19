import { useState } from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import AllProducts from './Pages/AllProducts/AllProducts'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Contacts from './Pages/Contacts/Contacts'
import AppProvider from "./Context/AppContext";
import Users from './Pages/Users/Users'
import Login from './Pages/Login/Login'
import SignUp from "./Pages/SignUp/SignUp";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <AllProducts />,
        },
        {
          path: "products/:id",
          element: <ProductDetails />,
        },
        {
          path: "contacts",
          element: <Contacts></Contacts>
        },
        {
          path: "users",
          element: <Users></Users>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <SignUp></SignUp>
        },
        {
          path: `*`,
          element: <NotFound></NotFound>
        },

      ],
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  );
}
export default App
