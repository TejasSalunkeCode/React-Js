// import { Country } from "../../pages/Country";

// export const SearchFilter=({search,setSearch,filter,setFilter,countries,setCountries})=>{
// const handleInputChange=(event)=>{
//     event.preventDefault();
//     setSearch(event.target.value)
// }
// const handleselectChange=(event)=>{
//         event.preventDefault();
//     setFilter(event.target.value)
// }
// // console.log(search,filter);
// const setSearchCountry=(country)=>{
//     if(search){
//         return country.name.common.toLowerCase().includes(search.toLowerCase());
//     }
//     return country;
// }


// const sortCountries=(value)=>{
// const sortCountry={...countries}.sort((a,b)=>{
//     return value==="asc"
//     ? a.name.common.localeCompare(b.name.common)
//     : b.name.common.localeCompare(a.name.common);
// });
// setCountries(sortCountry);
// };

// const filterregion=(country)=>{
//     if(filter==="all") return country;
//     return country.region===filter;
// }

// const filtercountry=countries.filter((country)=>setSearchCountry(country) && filterregion(country));

//     return (
//     <section className="section-searchFilter container">
//     <input type="text" placeholder="search" value={search} onChange={handleInputChange} />
//         <div>
//             <button onClick={()=>sortCountries("asc")}>Asc</button>
//         </div>
//         <div>
//             <button onClick={()=>sortCountries("des")}>Desc</button>
//         </div>
//     <div>
//         <select className="select-section" value={filter} onChange={handleselectChange}>
//             <option value="all">All</option>
//              <option value="Africa">Africa</option>
//               <option value="America">America</option>
//                <option value="Asia">Asia</option>
//                 <option value="Europe">Europe</option>
//                  <option value="Oceania">Oceania</option>
//         </select>
//     </div>

//     </section>
//     )
// }


export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};