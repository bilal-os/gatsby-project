import React from "react";
import Popup from "reactjs-popup";
import TestimonialFormCard from "./form";
const contentStyle = { background: '#000' };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
import { FaStar} from "react-icons/fa"
const arrowStyle = { color: '#000' }; // style for an svg element

const PopUp = () => (
  <Popup
    trigger={ <button
        onClick={() => setIsOpenPopup(true)}
        className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
      >
        <FaStar className="inline-block h-6 w-6 lg:hidden" />
        <span className="hidden lg:block">Write a Testimonial</span>
      </button>}
      contentStyle={contentStyle}
      overlayStyle={overlayStyle}
      arrowStyle={arrowStyle}
  >
    <span> <TestimonialFormCard /> </span>
  </Popup>
);

export default PopUp;