import React from 'react';

const TestimonialFormCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 font-bold text-gray-800">Write a Testimonial</h2>
          <form>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="subjects" className="text-gray-700 font-semibold mb-2 block">
                Subjects
              </label>
              <select
                id="subjects"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                rows="6" // Adjust the number of rows as per your requirement
                placeholder="Write your testimonial"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFormCard;







