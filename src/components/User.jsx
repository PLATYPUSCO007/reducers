import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../redux/slice";

export const User = () => {

    const user = useSelector((state)=>state.user.name);
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(setName('Pedro'))
    }

  return (
    <div>
        <hr />
        <h1>{user}</h1>
        <button onClick={handleClick}>Cambiar</button>
    </div>
  )
}
