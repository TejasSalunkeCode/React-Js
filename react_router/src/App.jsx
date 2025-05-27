import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./Components/Layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./API/GetApiData";
// import { Route } from "react-router-dom";
import {MovieDetailss} from "./Components/Layout/UI/MovieDetailss"
import { getdetails } from "./API/GetMovieDetails";
import {contactData} from "./pages/Contact";
 const APP=()=>{

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children :[
 
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>

    },

    {
      path:"/movie",
      element:<Movie/>,
      loader:getMoviesData,
      
    },
      {
      path:"/movie/:movieID",
      element:<MovieDetailss/>,
      loader :getdetails,

    },
    {
      path:"/contact",
      element:<Contact/>,
      action:contactData,
    },
    // {
    //   path:"*",
    //   element:<ErrorPage/>
    // },
    ],
     },
  ]);


  //traditional meathod
  // const router=createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //     <Route path="/" element={<Home/>}/>
  //     <Route path="/about" element={<About/>}/>
  //     <Route path="/movie" element={<Movie/>}/>
  //     <Route path="/contact" element={<Contact/>}/>
  //   </Route>
  //   )
  // );

  return <RouterProvider router={router}/>; 
};
export default APP;
























// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppLayout from "./Components/Layout/AppLayout";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Movie } from "./pages/Movie";
// import { Contact } from "./pages/Contact";
// import { ErrorPage } from "./pages/ErrorPage";
// import "./App.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "home", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "movie", element: <Movie /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;
