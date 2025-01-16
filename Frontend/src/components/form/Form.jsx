import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [clas, setClas] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  const submitHandler = async(e) =>{
    e.preventDefault();
    try{
        const response = await fetch("http://localhost:5000/add",{
        method:"post",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify({
          "Name":name,
        }),
      })
      .then((response)=>{
        if(response.ok){
          console.log("studnet added successfully");
          return response.json();
        }
      })
      .then((data)=>{
        console.log(data);
      })

    }
    catch(error){
      console.log("Error",error);
    }
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
          <li>
            <div>
              <img src="" alt="" />
              <p>Add the image from device</p>
            </div>
            <div>
              <ul>
                <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}  required/>
              </ul>
              {/* <ul>
                <input type="text" placeholder='Fathers Name' onChange={(e)=>{setFatherName(e.target.value)}} required/>
              </ul>
              <ul>
                <input type="text" placeholder='Class' onChange={(e)=>{setClas(e.target.value)}} required/>
              </ul>
              <ul>
                <input type="number" placeholder='Mobile Number' onChange={(e)=>{setNumber(e.target.value)}} required/>
              </ul>
              <ul>
                <input type="emial" placeholder='Email ID' onChange={(e)=>{setEmail(e.target.value)}} />
              </ul>
              <ul>
                <input type="text" placeholder='Tell me about youseft' onChange={(e)=>{setAbout(e.target.value)}} />
              </ul> */}
            </div>
          </li>
          <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form