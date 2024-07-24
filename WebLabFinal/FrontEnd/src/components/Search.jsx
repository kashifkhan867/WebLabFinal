import React from 'react';

const Search = () => {
  return (
    <div className="bg-gray-950 py-5">
      <div className="container mx-auto flex items-center">
        {/* Search Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-900 text-white px-4 py-2 rounded-l-md focus:outline-none focus:shadow-outline-gray"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray">
            Search
          </button>
        </div>

        {/* Browse */}
        <button className="ml-2 text-white px-4 py-2 hover:underline focus:outline-none focus:shadow-outline-gray">
          Browse
        </button>

        {/* News */}
        <button className="ml-2 text-white px-4 py-2 hover:underline focus:outline-none focus:shadow-outline-gray">
          News
        </button>
      </div>
    </div>
  );
};

export default Search;
