// import React, { useContext } from "react";
// import { AppContext } from "../Context/AppContext";
// import Spinner from "./Spinner";
// import BlogDetails from "./BlogDetails";
// import './Blog.css'

// const Blogs = () => {
//     // consume 
//     const {posts,loading} = useContext(AppContext);


//     return (
//         <div className="flex flex-col gap-y-10 my-4">
//             {loading ? (
//                 <div className="min-h-[80vh] w-full flex justify-center items-center">
//                     <p className="text-center font-bold text-3xl">Loading</p>
//                 </div>
//             ): posts.length === 0 ? (
//                 <div className="min-h-[80vh] w-full flex justify-center items-center">
//                     <p className="text-center font-bold text-3xl">No Blogs Found</p>
//                 </div>
//             ) : (
//                 posts.map((post) => {
//                     <BlogDetails key={post.id} post={post}></BlogDetails>
//                 })
//             )
//         }
//         </div>
        
//     );
// }

// export default Blogs
























import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return ( 
    <div className="my-[100px]">
      <div className="flex flex-col gap-y-10 my-4">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <p className="font-bold text-3xl text-center my-[200px]">
            Data Not Found
          </p>
        ) : (
          posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
