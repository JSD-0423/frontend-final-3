import {Outlet} from "react-router-dom";

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