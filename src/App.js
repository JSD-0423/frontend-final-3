import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home/Home";
import React from "react";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import { SigninPage } from "./Pages/Signin";
import { PageNotFound } from "./Pages/PageNotFound";
import AdminDashBoard from "./Pages/AdminDashBoard/AdminDashboard";
import { Signup } from './Pages/Signup/Signup';
import { SearchProvider } from "./context/SearchContext";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products/" element={<Category />} />
      <Route path="/products/:targetAPI" element={<Category />} />
      <Route path="/products/:targetAPI/:targetID" element={<Category />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/dashboard" element={<AdminDashBoard />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {

    return (
        <SearchProvider>
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
        </SearchProvider>
    );
}

export default App;

