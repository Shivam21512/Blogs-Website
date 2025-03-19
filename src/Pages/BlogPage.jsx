import React, { useContext, useEffect,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";
import BlogDetails from "../Components/BlogDetails";

import { baseUrl } from "../baseUrl";

const BlogPage =() =>{
    const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const{setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchReleatedBlogs(){
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error aagya i blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchReleatedBlogs();
        }
    },[location.pathname] )


    return (
        <div>
            <Header></Header>
                <div>
                    <button
                    onClick={() => navigation(-1)}
                    > 
                    Back 
                    </button>
                </div>
                {
                    loading ?
                    (<div>
                        <BlogDetails post={blog}></BlogDetails>
                        <h2>Related Blogs</h2>
                        {
                            relatedBlogs.map((post) => {
                                <div>
                                    <BlogDetails post={post}></BlogDetails>
                                </div>
                            })
                        }
                    </div>) :
                    (<div>
                        <p>No Blog found</p>
                        </div>)
                }

        </div> 
    )
}

export default BlogPage;























// import React, { useContext, useEffect, useState } from "react";
// import Header from "../Components/Header";
// import { AppContext } from "../Context/AppContext";
// import Spinner from "../Components/Spinner";
// import { useLocation, useNavigate } from "react-router-dom";
// import BlogDetails from "../Components/BlogDetails";

// const BlogPage = () => {
//   const { loading, setLoading } = useContext(AppContext);
//   const [blog, setBlog] = useState(null);
//   const [reletedBlogs, setReletedBlogs] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
//   const blogId = location.pathname.split("/").at(-1);

//   async function fetchReleatedBlogs() {
//     setLoading(true);
//     const url = `${baseUrl}?blogId=${blogId}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//       setBlog(data.blog);
//       setReletedBlogs(data.relatedBlogs);
//     } catch (err) {
//       console.log(err);
//       setBlog(null);
//       setReletedBlogs([]);
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchReleatedBlogs();
//   }, [location.pathname]);

//   return (
//     <div className="my-[100px]">
//       <Header />
//       <div className="w-11/12 mx-auto">
//         <div>
//           <button className="border-2 border-gray-300 py-1 px-4 rounded-md mb-6" onClick={() => navigate(-1)}>Back</button>

//         </div>
//         <div>
//           {loading ? (
//             <Spinner />
//           ) : blog ? (
//             <div >
//               <BlogDetails post={blog} />
//               <h2 className="text-2xl font-bold my-10">Releated Blogs</h2>
//               <div className="flex flex-col gap-y-8">
//                 {reletedBlogs.map((post) => (
//                   <div key={post.id} >
//                     <BlogDetails post={post} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <p>No Blog Found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
