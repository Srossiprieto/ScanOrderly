import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="flex mt-24 p-3 flex-col min-h-[65dvh] max-w-screen-lg mx-auto items-start justify-center text-left md:items-center md:text-center">
      <div className="flex-col max-w-[1200px] w-full items-start md:items-center">
        <div className="h-8 bg-[#5b5b5b36] rounded w-1/4 mb-4"></div>
        <div className="gap-3 flex flex-col sm:gap-10 justify-between">
          <div className="h-12 bg-[#5b5b5b36] rounded w-3/4 mx-0 md:mx-auto"></div>
          <div className="h-4 bg-[#5b5b5b36] rounded w-1/2 mx-0 md:mx-auto"></div>
          <div className="h-4 bg-[#5b5b5b36] rounded w-full mx-0 md:mx-auto"></div>
          <div className="h-4 bg-[#5b5b5b36] rounded w-5/6 mx-0 md:mx-auto"></div>
          <div className="flex gap-2 justify-start md:justify-center">
            <div className="h-10 bg-[#5b5b5b36] rounded w-1/4"></div>
            <div className="h-10 bg-[#5b5b5b36] rounded w-1/4"></div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <div className="h-48 bg-[#5b5b5b36] rounded w-full"></div>
      </div>
    </div>
  );
};

export default Skeleton;