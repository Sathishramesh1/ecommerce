import React from 'react'
import{ AiFillStar, AiOutlineStar } from "react-icons/ai"

const Rating = ({rating,onClick,style}) => {
  return (
    <div>
        {
            [...Array(5)].map((_,i) =>
               <span key={i}
               onClick={()=>onClick(i)}
               style={style}
               >
                { rating> i?(
                <AiFillStar fontSize={15}/>
                ):(
                    <AiOutlineStar fontSize={15}/>
                )


        }</span>
            )
        }

    </div>
  )
}

export default Rating