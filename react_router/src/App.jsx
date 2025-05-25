import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";

 const APP=()=>{

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>

    },

    {
      path:"/movie",
      element:<Movie/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ]);

  return <RouterProvider router={router}/>; 
};
export default APP;