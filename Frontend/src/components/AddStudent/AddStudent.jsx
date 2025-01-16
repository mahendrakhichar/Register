import React, { useEffect } from 'react';
import Form from '../form/Form';
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
    <div className="flex justify-center items-center p-4">
      <button
        onClick={handleOnClick}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Add Student
      </button>
    </div>
  );
};

export default AddStudent;
