import {Outlet} from "react-router-dom";
import React from 'react';


export default function RootLayout() {
    return (
        <>
            {/*<Header/>*/}
            <main>

                <Outlet/>

                {/*<Footer/>*/}
            </main>
        </>
    );
}