import React, { useState } from 'react';
import Student from '../Student/Student';

const SearchStudent = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Fetching data from server
    const response = fetch("http://localhost:5000/students", {
      method: "get",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Details fetched successfully");
          return response.json();
        } else {
          console.log("Error fetching details");
          return [];
        }
      })
      .then((data) => {
        console.log(data);
        setSearch(data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter student details to search either name or roll no."
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={onSubmitHandler}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
      <ul className="mt-4">
        {loading ? (
          search.length > 0 ? (
            search.map((item, index) =>
              item.Name === input ? (
                <Student details={item} key={index} />
              ) : null
            )
          ) : (
            <li className="text-center text-gray-500">No student found</li>
          )
        ) : (
          <li className="text-center text-gray-500">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default SearchStudent;
