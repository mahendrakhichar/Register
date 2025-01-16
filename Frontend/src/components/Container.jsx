import React from 'react';
import { SearchStudent, AddStudent } from './index';

const Container = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-4">
        <div className="space-y-8">
          <div className="border-b pb-4">
            <SearchStudent />
          </div>
          <div className="border-b pb-4">
            <AddStudent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
