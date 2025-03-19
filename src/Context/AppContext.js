import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//step 1
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // data filling pending 

    async function fetchBlogPosts(page = 1, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }
        console.log("Printing the final URL");
        console.log(url);
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    };

    // Handle when Next and Previous button are clicked
    const handlerPageChange = (page) => {
      
        navigate( { search: `?page=${page}`});
        setPage(page);
        //fetchBlogPosts(page);
    };

    const value = {                // Har bar pass karni padega jo bhi upar likhoge vo
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlerPageChange

    };
    
    // Step 2
    return <AppContext.Provider value={value}>
            {children}
           </AppContext.Provider>;

}
































// import { createContext, useState } from "react";
// import { baseUrl } from "../baseUrl";
// import { useNavigate } from "react-router-dom";

// export const AppContext = createContext();

// export default function AppContextProvider({ children }) {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(null);
//   const navigate = useNavigate();

//   // Fetch Blog Data
//   const fetchBlogPosts = async (page = 1, tag = null, category) => {
//     setLoading(true);
//     let url = `${baseUrl}?page=${page}`;
//     if (tag) {
//       url += `&tag=${tag}`;
//     }
//     if (category) {
//       url += `&category=${category}`;
//     }
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       if (!data.posts || data.posts.length === 0)
//         throw new Error("Something Went Wrong");
//       console.log("Api Response", data);
//       setPage(data.page);
//       setPosts(data.posts);
//       setTotalPages(data.totalPages);
//     } catch (error) {
//       console.log("Error in Fetching BlogPosts", error);
//       setPage(1);
//       setPosts([]);
//       setTotalPages(null);
//     }
//     setLoading(false);
//   };

//   // Handle When Next and Previous button are clicked
//   const handlerPageChange = (page) => {
//     navigate({search : `?page=${page}`});
//     setPage(page);

//   };

//   const value = {
//     posts,
//     setPosts,
//     loading,
//     setLoading,
//     page,
//     setPage,
//     totalPages,
//     setTotalPages,
//     fetchBlogPosts,
//     handlerPageChange,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// }