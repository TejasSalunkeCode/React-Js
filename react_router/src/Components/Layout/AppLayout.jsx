// import  Footer  from "./Footer"
// import { Header } from "./Header"

// const AppLayout=()=>{
//     return(
//         <>
//             <Header/>
//             <Footer/>
//         </>
//     )
// }

// export default AppLayout;


import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />  {/* This renders the matched child route */}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
