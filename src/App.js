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
import { SigninPage } from "./Pages/Signin";
import { PageNotFound } from "./Pages/PageNotFound";
import {Signup} from './Pages/Signup/Signup';


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path='/products/:targetAPI' element={<Category/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/signin" element={<SigninPage />} />
            <Route path="*" element={<PageNotFound/>} />
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

