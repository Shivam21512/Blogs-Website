import React from "react";
import Pagination from "../Components/Pagination";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import { useLocation, useNavigate } from "react-router-dom";

const TagPage =() =>{

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div>
            <Header></Header>
            <div>
                <button  onClick={() => navigation(-1)}
                    >
                   back
                </button>
                <h2>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    )
}

export default TagPage
