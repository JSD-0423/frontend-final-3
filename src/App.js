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
import { AdminDashbord } from "./Pages/AdminDashboard/AdminDashboard";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<Category />} />
      <Route path="/dashboard" element={<AdminDashbord />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;

