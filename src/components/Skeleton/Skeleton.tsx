import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-pulse p-4 space-y-4 w-full max-w-md">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default Skeleton;