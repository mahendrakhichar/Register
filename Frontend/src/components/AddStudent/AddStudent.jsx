import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/add-student');
  };

  useEffect(() => {
    console.log('lets go to form');
  }, [navigate]);

  return (
    <div className="relative p-4">
      {/* Button positioned in the top-right corner */}
      <button
        onClick={handleOnClick}
        className="absolute top-4 right-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
      >
        Add Student
      </button>
    </div>
  );
};

export default AddStudent;
