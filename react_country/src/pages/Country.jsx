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
import { Loading } from "../components'/UI/Loader";
import { CountryCard } from "../../src/components'/Layout/CountryCard";
import { SearchFilter } from "../components'/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState(""); // default to empty string
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loading />;
  const filteredCountries = countries.filter((country) => {
    const matchSearch = search
      ? country.name.common.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchRegion = filter === "all" ? true : country.region === filter;

    return matchSearch && matchRegion;
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};
