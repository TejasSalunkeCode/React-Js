// import { useEffect, useState, useTransition } from "react"
// import { getCountriesData } from "../api/PostApi";
// import { Loading } from "../components'/UI/Loader";

// export const Country=()=>{
//    const[isPending,startTransition]=useTransition();
//    const[countries,setCountries]=useState([]);

//     useEffect(()=>{
//         startTransition(async()=>{
//             const res=await getCountriesData();
//             // console.log(res);
//             setCountries(res.data);
//         })
        
//     },[])

//     if(isPending) return <Loading/>
    
//     return(
//         <section className="country-section">
//             <ul className="grid grid-four-cols">
//                 {
//                   countries.map((curCountry,index)=>{
//                     return <CountryCard country={curCountry} key={index}/>
//                   })  
//                 }
//             </ul>
//         </section>
//     )
// }








import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loading } from "../components'/UI/Loader"; // Also fix the typo in path
import { CountryCard } from "../../src/components'/Layout/CountryCard"; // Make sure this is imported too

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loading />;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};
