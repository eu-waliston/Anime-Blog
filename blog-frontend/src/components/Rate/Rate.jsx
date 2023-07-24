import React from "react";
import "./Rate.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rate = () => {
    return (
        <div className="rate">
        <AiFillStar     className="rate-star"/>
        <AiFillStar     className="rate-star"/>
        <AiFillStar     className="rate-star"/>
        <AiFillStar     className="rate-star"/>
        <AiOutlineStar  className="rate-star"/>
      </div>
    )
}

export default Rate;