import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";



const CategoryPage = () =>{

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header>
                <div>
                    <button
                    onClick={() => navigation(-1)}
                    >
                        Back

                    </button>
                    <h2>
                        Blogs on <span>{category}</span>
                    </h2>
                    <Blogs></Blogs>
                    <Pagination></Pagination>
                </div>
            </Header>
        </div>
    )
}

export default CategoryPage
