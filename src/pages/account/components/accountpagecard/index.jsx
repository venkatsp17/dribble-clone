/* eslint-disable no-unused-vars */
import React from 'react'; 

export const UploadCard = () => {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300">
        <h2 data-testid="title-UploadCard" className="text-xl font-bold">Upload your first shot</h2>
        <p data-testid="description-UploadCard" className="text-gray-600 mt-2">
          Show off your best work. Get feedback, likes and be a part of a growing community.
        </p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
          Upload your first shot
        </button>
      </div>
    );
  };
  
 export const Placeholder = () => {
    return (
      <div data-testid="presentation" className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
    );
  };