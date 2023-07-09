import * as React from 'react';
import {Outlet} from "react-router-dom";
import Footer from '../Components/Footer/Footer';

export default function RootLayout() {
    return (
        <>
            {/*<Header/>*/}
            <main>

                <Outlet/>

                <Footer/>
            </main>
        </>
    );
}