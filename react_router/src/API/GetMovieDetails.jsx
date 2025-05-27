export const getdetails=async({params})=>{
    console.log(params);
    const id=params.movieID;
    try{
        const response=await fetch(
            `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        const data=await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        
    }
};


// export const getdetails = async ({ params }) => {
//   console.log("Loader params:", params);
//   const id = params.movieID;
//   const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
//   const data = await response.json();
//   console.log("Fetched data:", data);
//   return data;
// };
