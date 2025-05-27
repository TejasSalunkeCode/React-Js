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


import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

const AppLayout = () => {
  const navigation=useNavigation();
  console.log(navigation);
  if(navigation.state==="loading"){
   return <Loading/>
   
  }
  
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
