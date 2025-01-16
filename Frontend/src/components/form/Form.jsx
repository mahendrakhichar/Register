import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [clas, setClas] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [photo, setPhoto] = useState(null);
  const [status, setStatus] = useState("");  // For tracking submission status

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
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Student added successfully", data);

        // Show success message and reset the form
        setStatus("success");
        resetForm();

        // Hide the pop-up after 3 seconds
        setTimeout(() => setStatus(""), 3000);
      } else {
        throw new Error("Failed to add student");
      }
    } catch (error) {
      console.log("Error", error);

      // Show error message
      setStatus("error");

      // Hide the pop-up after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setName("");
    setFatherName("");
    setClas("");
    setNumber("");
    setEmail("");
    setAbout("");
    setPhoto(null);
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
            value={name} // Bind the state to the input field
          />
          <input
            type="text"
            placeholder="Father's Name"
            onChange={(e) => setFatherName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={FatherName} // Bind the state to the input field
          />
          <input
            type="text"
            placeholder="Class"
            onChange={(e) => setClas(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={clas} // Bind the state to the input field
          />
          <input
            type="number"
            placeholder="Mobile Number"
            onChange={(e) => setNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={number} // Bind the state to the input field
          />
          <input
            type="email"
            placeholder="Email ID"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email} // Bind the state to the input field
          />
          <input
            type="text"
            placeholder="Tell me about yourself"
            onChange={(e) => setAbout(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={about} // Bind the state to the input field
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      {/* Status Popup */}
      {status && (
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-md shadow-lg text-white ${
            status === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status === "success" ? (
            <>
              <svg
                className="w-12 h-12 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-center">Student Registered Successfully!</p>
            </>
          ) : (
            <>
              <svg
                className="w-12 h-12 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-center">Something Went Wrong!</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
