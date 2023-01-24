import React from "react";

const Paginate = ({ handleNext, handlePrevious, page, totalPages }) => {
  return (
    <div className="absolute z-30 bottom-28 right-96">
      <div className="flex flex-col items-center">
        <h2 className="text-gray-400">
          You are in page {page} of total <span>{totalPages}</span>
        </h2>
        <div className="inline-flex mt-2 xs:mt-0 gap-10">
          {/* Buttons */}
          <button
            onClick={handlePrevious}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded hover:bg-gray-900"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Prev
          </button>
          <button
            onClick={handleNext}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-800 border-0 border-l border-gray-700 rounded hover:bg-gray-900"
          >
            Next
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paginate;
