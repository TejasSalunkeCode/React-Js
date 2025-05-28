// // import { useEffect, useState } from "react";
// // import { getPost } from "../api/PostApi";
// // export const Posts = () => {

// //   const [data, setData] = useState([]);

// //   const getPostData = async () => {
// //     const res = await getPost();
// //     console.log(res.data);
// //     setData(res.data);
// //   };

// //   useEffect(() => {
// //     getPostData();
// //   }, []);

// //   return <section className="section-post">
// //     <ul>
      
// //         {
// //           data.map((curEle) => {
// //             const {id, body, title} = curEle;
// //             return (
// //               <li key={id}>
// //                 <p>{title}</p>
// //                 <p>{body}</p>
// //                 <button>Edit</button>
// //                 <button>Delete</button>
// //               </li>
// //             );
// //           })
// //         }
      
// //     </ul>
// //   </section>

// // }











// import { useEffect, useState } from "react";
// import { deletePost, getPost, postdata } from "../api/PostApi";
// import "./post.css";

// export const Posts = () => {
//   const [data, setData] = useState([]);
//   const[addData,setAddData]=useState({
//     title:"",
//     body:"",

//   })

//   // Fetch posts
//   const getPostData = async () => {
//     const res = await getPost();
//     setData(res.data);
//   };

//   useEffect(() => {
//     getPostData();
//   }, []);

//   // Delete post
//   const handledeletePost = async (id) => {
//     try {
//       const res = await deletePost(id);
//       console.log(res);
//       if (res.status === 200) {
//         const newUpdatedPost = data.filter((curPost) => curPost.id !== id);
//         setData(newUpdatedPost);
//       } else {
//         console.log("Failed to delete the post:", res.status);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };
 
//    const handleInputChange=(e)=>{
//     const name=e.target.name;
//      const value=e.target.value;

//   //    setAddData((prev)=>({
//   //     // console.log(prev);
//   //     return{
//   //       ...prev,[name] : value,
//   //     }
//   //    }))
//   //  }
//   const handleInputChange = (e) => {
//   const name = e.target.name;
//   const value = e.target.value;

//   setAddData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };


//     const addPostData=async()=>{
//       const res=await postdata(addData);
//       if(res.status===201){
//     setAddData([...data,res.data]);
//     setAddData({title:"",body:""});
//       }
//     }

//    const handleFormSubmit=(e)=>{
//     e.preventDefault();
//     addPostDarta();
//    }
//   return (
//     <>

//     <section className="section-post">
//       {/* Header with two input fields and one button */}
//       <form onSubmit={handleFormSubmit}>
//       <div className="post-header-bar">
//         <input
//           type="text"
//           placeholder="Add Title"
//           className="header-input"
//           autoComplete="off"
//           id="title"
//           name="title"
//           value={addData.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           placeholder="Add Post"
//           className="header-input"
//           id="body"
//           name="body"
//             value={addData.body}
//           onChange={handleInputChange}
//         />
//         <button className="header-button">ADD</button>
//       </div>
//       </form>

//       <ul>
//         {data.map((curEle, index) => {
//           const { id, title, body } = curEle;
//           return (
//             <li key={id} className="post-card">
//               <div className="post-header">
//                 {/* Serial numbering */}
//                 <p className="post-id">{index + 1}.</p>
//               </div>
//               <p className="post-title">Title: {title}</p>
//               <p className="post-body">Body: {body}</p>
//               <div className="btn-group">
//                 <button className="btn edit">EDIT</button>
//                 <button
//                   className="btn delete"
//                   onClick={() => handledeletePost(id)}
//                 >
//                   DELETE
//                 </button>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//     </>
//   );
// }




























import { useEffect, useState } from "react";
import { deletePost, getPost, postdata } from "../api/PostApi";
import "./post.css"; // Make sure post.css exists and is in the correct path

export const Posts = () => {
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  const[updateApi,setUpdateApi]=useState({});

  // Fetch posts from API
  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Handle delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPost = data.filter((curPost) => curPost.id !== id);
        setData(newUpdatedPost);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add a new post
  const addPostData = async () => {
    const res = await postdata(addData);
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" }); // Clear form inputs
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };
  const handleUpdatePost=(curEle)=>setUpdateApi(curEle);

  // useEffect(()=>{
  //   updateApi && setAddData({
  //     title: updateApi.title || "",
  //     body : updateApi.body || " ",
  //   })
  // },[updateApi])

  useEffect(() => {
  if (updateApi.id) {
    setAddData({
      title: updateApi.title || "",
      body: updateApi.body || "",
    });
  }
}, [updateApi]);

  return (
    <section className="section-post">
      {/* Form for adding posts */}
      <form onSubmit={handleFormSubmit}>
        <div className="post-header-bar">
          <input
            type="text"
            placeholder="Add Title"
            className="header-input"
            autoComplete="off"
            name="title"
            value={addData.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Add Post"
            className="header-input"
            name="body"
            value={addData.body}
            onChange={handleInputChange}
          />
          <button className="header-button" type="submit">
            ADD
          </button>
        </div>
      </form>

      {/* Post list */}
      <ul>
        {data.map((curEle, index) => {
          const { id, title, body } = curEle;
          return (
            <li key={id} className="post-card">
              <div className="post-header">
                <p className="post-id">{index + 1}.</p>
              </div>
              <p className="post-title">Title: {title}</p>
              <p className="post-body">Body: {body}</p>
              <div className="btn-group">
                <button className="btn edit" onClick={()=>handleUpdatePost(curEle)}>EDIT</button>
                <button
                  className="btn delete"
                  onClick={() => handleDeletePost(id)}
                >
                  DELETE
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

