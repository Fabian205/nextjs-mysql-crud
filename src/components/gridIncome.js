import React from 'react';

function GridIncome({ data }) {
  return (
    <div className="grid grid-cols-1 gap-2">
      {data.map((item, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded shadow">
          <div className="flex flex-row space-x-4">
            <h1 className="text-indigo-400 text-2xl font-semibold">Id :</h1>
            <h2 className="text-white text-2xl">{item.id}</h2>
          </div>
          <div className="flex flex-row space-x-4">
            <p className="text-indigo-400">Income:</p>
            <p className="ml-3 text-white">{item.income}</p>
          </div>
          <div className="flex flex-row">
            <p className="text-indigo-400">Date :</p>
            <p className="text-white">{item.date}</p>
          </div>
          <div className="flex flex-row">
            <p className="text-indigo-400">Description :</p>
            <p className="text-white">{item.description}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default GridIncome;