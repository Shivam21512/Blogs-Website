import React from "react";
import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Blogs></Blogs>
                <Pagination></Pagination>
            </div>
        </div>
    )
}

export default Home 















// import React from 'react'
// import Header from '../Components/Header'
// import Blogs from '../Components/Blogs'
// import Pagination from '../Components/Pagination'


// const Home = () => {
//     return (
//         <div>
//             <Header />
//             <Blogs />
//             <Pagination />
//         </div> 
//     )
// }

// export default Home