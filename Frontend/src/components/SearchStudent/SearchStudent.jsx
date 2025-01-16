import React, { useState } from 'react'
import  Student  from '../Student/Student';
const SearchStudent = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  // const [details, setDetails] = useState([]);
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    // whatever data i have in serach i want will send a get request to server
    const response = fetch("http://localhost:5000/students", {
      method:"get",
    })
    .then((response)=>{
      if(response.ok){
        console.log("details fetched sucessfully");
        return response.json();
      }
      else{
        console.log("getting an error in fetching details");
        return [];
      }
    })
    .then((data)=>{
      console.log(data);
      setSearch(data);
      setLoading(true);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  
  return (
    <div>
        <input type="text" placeholder='Enter student details to search either name or roll no.' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={onSubmitHandler}>Search</button>
        <ul>
        {loading ? (
          search.length > 0 ? (
            search.map((item, index) => {
              return item.Name === input ? (
                <Student details={item} key={index} />
              ) : null;
            })
          ) : (
            <li>No student found</li>
          )
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  )
}

export default SearchStudent