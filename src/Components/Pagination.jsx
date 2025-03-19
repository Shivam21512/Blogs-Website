import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {

    const {page, handlerPageChange, totalPages} = useContext(AppContext);
    return(
     <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white ">
        <div className="flex justify-between w-11/12 max-w-[670px] py-2">
           <div className="flex gap-x-2">
            
           {page > 1 &&
            (<button 
            className="rounded-md border-2 px-4 py-1"
            onClick={() => handlerPageChange(page-1)}>
                Previous
            </button>)}

            {page < totalPages &&
            (<button
            className="rounded-md border-2 px-4 py-1"
             onClick={() => handlerPageChange(page+1)}>
                Next
            </button>)}
           </div>

            <p className="font-bold text-sm">
                Page {page} of {totalPages} 

            </p>
        </div>
     </div>
    )
}

export default Pagination




// import React, { useContext } from "react";
// import { AppContext } from "../Context/AppContext";

// const Pagination = () => {
//   const { page, totalPages, handlerPageChange } = useContext(AppContext);
//   return (
//     <div className="  fixed bottom-0 bg-white py-2 border-t-2 border-t-gray-300 w-full inset-x-0">
//       <div className="flex gap-x-3 items-center w-11/12 max-w-2xl mx-auto">
//         {page > 1 && (
//           <button
//             className="rounded-md border-gray-300 border-2 px-4 py-1"
//             onClick={() => handlerPageChange(page - 1)}
//           >
//             Previous
//           </button>
//         )}

//         {page < totalPages && (
//           <button
//             className="rounded-md border-gray-300 border-2 px-4 py-1"
//             onClick={() => handlerPageChange(page + 1)}
//           >
//             Next
//           </button>
//         )}
//         <p className="text-sm font-semibold ml-auto">
//           Page {page} of {totalAPages}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
