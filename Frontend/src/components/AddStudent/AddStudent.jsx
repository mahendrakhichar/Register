import React, { useEffect } from 'react'
import Form from '../form/Form';
import { useNavigate } from 'react-router-dom';
const AddStudent = () => {

    const navigate = useNavigate();
    const handleOnClick = () =>{
        navigate('/form');
    }

    useEffect(()=>{
        console.log("lets go to form");
    },[navigate])

  return (
    <div>
        <button
            onClick={handleOnClick}
        >Add</button>
    </div>
  )
}

export default AddStudent