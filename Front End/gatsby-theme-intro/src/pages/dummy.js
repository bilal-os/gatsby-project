import React, { useState } from 'react';

const TestimonialFormCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={handleToggleForm}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
      >
        Write a Testimonial
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full mx-4 relative sm:p-10 sm:max-w-md">
            <button
              onClick={handleToggleForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl mb-4 font-bold text-gray-800">Write a Testimonial</h2>
            <form className="flex flex-col">
              <div className="mb-4 flex flex-wrap">
                <div className="w-full sm:w-1/2 sm:mr-2">
                  <label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full sm:w-1/2 sm:ml-2">
                  <label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subjects" className="text-gray-700 font-semibold mb-2 block">
                  Subjects
                </label>
                <select
                  id="subjects"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="math-sl">Math SL</option>
                  <option value="math-hl">Math HL</option>
                  <option value="physics">Physics</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="testimonial" className="text-gray-700 font-semibold mb-2 block">
                  Testimonial
                </label>
                <textarea
                  id="testimonial"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 resize-none"
                  rows="6"
                  placeholder="Write your testimonial"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialFormCard;
