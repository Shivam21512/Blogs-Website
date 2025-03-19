import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Pagination from "./Components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext"
import './Components/App.css'
import { Route, useLocation, useSearchParams } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./Pages/Home"
import BlogPage from "./Pages/BlogPage"
import TagPage from "./Pages/TagPage"
import CategoryPage from "./Pages/CategoryPage"

export default function App() {
    const {fetchBlogPosts} = useContext(AppContext);

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();


    useEffect( () => {
       const page = searchParams.get("page") ?? 1;

       if(location.pathname.includes("tags")){
        //iska matlab tag wala page show krna h
        const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),tag);
        }

        else if(location.pathname.includes("categories")){
            const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
            fetchBlogPosts(Number(page), null, category);
        }
        else{
            fetchBlogPosts(Number(page));
        }
       }, [location.pathname, location.search]) ;

   
    return (
       <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/blogs/:blogsId" element = {<BlogPage/>}></Route>
        <Route path="/tags/:tag" element = {<TagPage/>}></Route>
        <Route path="/categories/:category" element = {<CategoryPage/>}></Route>

       </Routes>
    )
}


 


































// import "./App.css";
// import React, { useContext, useEffect } from "react";
// import Home from "./Pages/Home";
// import BlogPage from "./Pages/BlogPage";
// import TagPage from "./Pages/TagPage";
// import CategoryPage from "./Pages/CategoryPage";
// import { AppContext } from "./Context/AppContext";
// import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";

// const App = () => {
//   const { fetchBlogPosts } = useContext(AppContext);
//   const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const page = searchParams.get("page") ?? 1;

//     const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
//     const category = location.pathname.split("/").at(-1).replaceAll("-", " ");

//     if (location.pathname.includes("tags")) {
//       fetchBlogPosts(Number(page), tag);
//     }
//     else if (location.pathname.includes("categories")) {
//       fetchBlogPosts(Number(page), category);
//     }
//     else {
//       fetchBlogPosts(Number(page));
//     }

//   }, [location.pathname, location.search]);

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/blog/:blogId" element={<BlogPage />} />
//       <Route path="/tags/:tag" element={<TagPage />} />
//       <Route path="/categories/:category" element={<CategoryPage />} />
//     </Routes>
//   );
// };

// export default App;
