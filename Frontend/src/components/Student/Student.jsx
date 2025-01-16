import React, { useState } from 'react';

const Student = ({ details }) => {
  const [clicked, setClicked] = useState(false);

  const submitHandler = () => {
    setClicked(true);
  };

  const convertBufferToBase64 = (buffer) => {
    const binary = new Uint8Array(buffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ''
    );
    return btoa(binary); // Convert to Base64
  };

  return (
    <div className="border-b pb-6 mb-6">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-800">{details.Name}</p>
        <button
          onClick={submitHandler}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          See Details
        </button>
      </div>
      {clicked && (
        <div className="mt-4 space-y-4">
          <img
            src={`data:image/jpeg;base64,${convertBufferToBase64(details.Photo.data)}`}
            alt={details.Name}
            className="w-36 h-36 rounded-full object-cover"
          />
          <div className="space-y-2">
            <p className="text-gray-700">Father's Name: {details.FathersName}</p>
            <p className="text-gray-700">Class: {details.Class}</p>
            <p className="text-gray-700">Contact Number: {details.ContactNumber}</p>
            <p className="text-gray-700">Email: {details.EmailId}</p>
            <p className="text-gray-700">Introduction: {details.Introduction}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
