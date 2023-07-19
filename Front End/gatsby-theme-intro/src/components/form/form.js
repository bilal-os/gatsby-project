import React, { useState } from 'react';
import axios from 'axios';
import {ClipLoader} from 'react-spinners';

const TestimonialFormCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const [name,setname] = useState( "" );
  const [message,setmessage] = useState( "" );
  const [subject,setsubject] = useState( "" );
  
  const [isLoading, setIsLoading] = useState(false); 


  const handleNameInput = (e) => {

    setname(e.target.value);

  }

  const handleMessageInput = (e) => {


    setmessage(e.target.value);


  }

  const handleSubjectInput = (e) => {


    setsubject(e.target.value);


  }

  const sendDB = async (e) => {

    console.log("Sending to DB");

    e.preventDefault();

    setIsLoading(true);
  
    try {
      const response = await axios.post('https://gatsby-backend-5939a551ead9.herokuapp.com/api/createTestimonial', {  message: message,name:name, subject: subject});
     
     console.log("Stuck here");

      if (response.status) {
              console.log("success");
              window.alert("Testimonial Submitted");
              location.reload();
             
      }
    } catch (error) {
      console.log(error);
    }
      setIsLoading(false);
    }


  return (
    <div>
      <button
        onClick={handleToggleForm}
        className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
      >
        Write a Testimonial
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full mx-4 relative">
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
            <form className="flex flex-col" onSubmit={sendDB}>
              <div className="mb-4 flex">
                <div className="w-1/2 mr-2">
                  <label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameInput}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
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
                  value={subject}
                  required
                  onChange={handleSubjectInput}
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
                  required
                  value={message}
                  onChange={handleMessageInput}
                  placeholder="Write your testimonial"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
                >
                 {isLoading ? <ClipLoader loading color='#ffffff' size={30}/> : 'Submit Testimonial'}
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