import React from 'react';
import { SearchStudent, AddStudent } from './index';

const Container = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-8"> {/* Adds vertical spacing between components */}
        <div className="border-b pb-4">
          <SearchStudent />
        </div>
        <div className="border-b pb-4">
          <AddStudent />
        </div>
      </div>
    </div>
  );
};

export default Container;
