export const Practices=()=>{
    // return <h1>Interview</h1>;
    const student=[];
    return(
        <>
        {/* <p><h1>{student.length && "No student found"}</h1></p> */}
        {/* <p><h1>{student.length===0 && "No student found"}</h1></p> */}
        {/* <p><h1>{!student.length===0 && "No student found"}</h1></p> */}
        <p><h1>{Boolean(!student.length===0) && "No student found"}</h1></p>
        <p>Number of student : {student.length}</p>
        </>
    )
};