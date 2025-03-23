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
