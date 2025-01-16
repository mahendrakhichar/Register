import React, { useState } from 'react'

const Student = ({details, key}) => {
    const[clicked, setClicked] = useState(false);
    const submitHandler=()=>{
        setClicked(true);
    }

    const convertBufferToBase64 = (buffer) => {
        const binary = new Uint8Array(buffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        );
        return btoa(binary); // Convert to Base64
      }; 
  return (
    <>
        <div>
        <p>{details.Name}</p>
        <button onClick={submitHandler}>See Details</button>
        </div>
        {clicked ? (
            <div>
                <img src={`data:image/jpeg;base64,${convertBufferToBase64(details.Photo.data)}`} alt="" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                <p>{details.Name}</p>
                <p>{details.FathersName}</p>
                <p>{details.Class}</p>
                <p>{details.ContactNumber}</p>
                <p>{details.EmailId}</p>
                <p>{details.Introduction}</p>
            </div>
        ):(
            <div></div>
        )}
    </>
    
  )
}

export default Student 