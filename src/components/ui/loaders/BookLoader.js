import React from "react";

const BookLoader = () => {
  return (
    <div className="md:flex bg-white rounded shadow animate-pulse">
      <div className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full bg-gray-200"></div>
      <div className="p-4 text-center md:text-left space-y-4 flex-1">
        <div className="flex justify-between">
          <p className="bg-slate-200 text-slate-200 text-[12px] w-12">
            Loading
          </p>
          <div className="flex space-x-2">
            <p className="bg-slate-200 text-slate-200 text-[12px] w-6">l</p>
            <p className="bg-slate-200 text-slate-200 text-[12px] w-6">l</p>
          </div>
        </div>
        <p className="bg-slate-200 text-slate-200 text-[9px]">Loading...</p>
        <p className="bg-slate-200 text-slate-200 text-[9px] w-60">
          Loading...
        </p>
        <p className="bg-slate-200 text-slate-200 text-[7px] w-36">
          Loading...
        </p>
        <p className="bg-slate-200 text-slate-200 text-[7px] w-16">
          Loading...
        </p>
        <p className="bg-slate-200 text-slate-200 text-[12px] w-20">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default BookLoader;
