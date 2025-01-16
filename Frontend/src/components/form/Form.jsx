import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [clas, setClas] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [photo, setPhoto] = useState(null);

  const formData = new FormData();  
  formData.append("Name", name);
  formData.append("FathersName", FatherName);
  formData.append("Class", clas);
  formData.append("ContactNumber", number);
  formData.append("EmailId", email);
  formData.append("Introduction", about);
  formData.append("Photo", photo);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "post",
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          console.log("Student added successfully");
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={submitHandler} className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img 
            src={photo ? URL.createObjectURL(photo) : ""}
            alt="Preview"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-center text-gray-500">Add the image from device</p>
        </div>
        <div className="space-y-4">
          <input 
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            type="text"
            placeholder="Father's Name"
            onChange={(e) => setFatherName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            type="text"
            placeholder="Class"
            onChange={(e) => setClas(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            type="number"
            placeholder="Mobile Number"
            onChange={(e) => setNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            type="email"
            placeholder="Email ID"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text"
            placeholder="Tell me about yourself"
            onChange={(e) => setAbout(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
