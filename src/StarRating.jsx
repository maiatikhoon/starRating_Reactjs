
import React, { useState } from 'react' 
import {FaStar} from "react-icons/fa"  ; 
import "./App.css"

function StarRating({noOfStars=5}) { 

   const [ rating , setRating ] = useState(0) ; 

   const [ hover , setHover ] = useState(0) ;  

    function handleClick(getCurrentIndex) { 

        // console.log("handleClick" , getCurrentIndex) ;  
        setRating(getCurrentIndex) ;
    }

    function handleMouseHover(getCurrentIndex) {
        // console.log("Mouse Enter",getCurrentIndex) ;  
        setHover(getCurrentIndex) ;
         
    }
    
    function handleMouseLeave() { 

        // console.log("mouse Leave" , getCurrentIndex) ;  
        setHover(rating) ;
    }


  return <div className='star-rating'> 

         {
            [...new Array(noOfStars)].map( (_,index) =>  { 
                  index = index+1 ;
                  {/* Index will be 1 , 2 ,3,4,5  */}
                  return <FaStar 
                     key={index}  
                     className={ index <= (hover || rating) ? "active" : "inactive" } 
                     onClick={ ()=> handleClick(index)} 
                     onMouseMove={ () => handleMouseHover(index)} 
                     onMouseLeave={ ()=> handleMouseLeave()}  
                     size={40} 
                  />
            })
         }
    </div>
}

export default StarRating

