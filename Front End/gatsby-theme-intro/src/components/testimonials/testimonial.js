import React,{useState,useEffect} from "react";
import { StaticImage } from 'gatsby-plugin-image';


export default function Reviews({testimonials}) {


  console.log("Data: ");
  console.log(testimonials);

      
  return (
    <div className="py-10 white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center font-header font-light text-2xl text-front leading-tight md:text-4xl">Testimonials</h2>

        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">

        <StaticImage
              src="../../images/physics.jpg"
              alt="Subject 2"
              className="w-full rounded"
            />

          
          <StaticImage
              src="../../images/physics.jpg"
              alt="Subject 2"
              className="w-full rounded"
            />

<StaticImage
              src="../../images/physics.jpg"
              alt="Subject 2"
              className="w-full rounded"
            />
              <StaticImage
              src="../../images/physics.jpg"
              alt="Subject 2"
              className="w-full rounded"
            />
            

          {testimonials.map((item) => (
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8" key={item._id}>
              <div className="space-y-4 mt-4 text-center break-all sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  <span className="font-serif">"</span> {item.message} <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">{item.name}</h6>
                  <span className="text-xs text-gray-500">{item.subject}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
