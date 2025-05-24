import { memo } from "react";
import { useRef } from "react";
  export const Count=memo(()=>{
    const renderCount=useRef(0);
    console.log(renderCount);

    return(
        <div className="mt-3 font-display text-center">
            <p className="">
                Nothing Change here but Ive now rendered:
                <span className="text-red-600">{renderCount.current++}time(s)</span>
            </p>
        </div>

    );
    
});
// export default react.memo(Count);
// import { useRef } from "react";

// export const Count = () => {
//   const renderCount = useRef(0);
//   renderCount.current++; // Increment on each render

//   console.log("Render count:", renderCount.current);

//   return (
//     <div className="mt-3 font-display text-center">
//       <p>
//         Nothing changed here, but I've now rendered:{" "}
//         <span className="text-red-600">{renderCount.current}</span> times
//       </p>
//     </div>
//   );
// };


// import { useState } from "react";

// const Count = () => {
//   console.log("Count component rendered");
//   return <p>This is the Count component.</p>;
// };

// export const ReactMemo = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-center items-center">
//         <h1>{count}</h1>
//         <button
//           className="btn bg-cyan-500 py-1 px-3"
//           onClick={() => {
//             setCount((prev) => prev + 1);
//           }}
//         >
//           Increment
//         </button>
//       </div>
//       <Count />
//     </>
//   );
// };
