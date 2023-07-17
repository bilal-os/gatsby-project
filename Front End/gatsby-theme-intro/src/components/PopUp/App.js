import { useState } from "react";
import Popup from "./PopUp";
import { FaStar } from "react-icons/fa"
import React from "react";



const App = () => {

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <div className="App">
     <button
  onClick={() => setIsOpenPopup(true)}
  className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
>
  <FaStar className="inline-block h-6 w-6 lg:hidden" />
  <span className="hidden lg:block">Write a Testimonial</span>
</button>

      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </div>
  );
}

export default App

