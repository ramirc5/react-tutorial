import { useState } from "react";   
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";



const Like = () => {
    const [like, setLike] = useState(false);
    if (like){
        return (
            <AiFillHeart onClick={() => setLike(false)} style={{color: 'red'}}/>
        )
    } else {
        return (
            <AiFillHeart onClick={() => setLike(true)}/>
        )
    }
}

export default Like;

