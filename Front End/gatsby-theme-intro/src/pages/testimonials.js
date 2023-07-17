import { graphql } from "gatsby"
import React,{useEffect, useState} from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import "../styles/style.css"
import Reviews from "../components/testimonials/testimonial"
import TestimonialFormCard from "../components/form/form"
import axios from "axios";


const Testimonials = ({ data }) => {
  const { profile,  site } = data


  let API = "http://localhost:5000/api/getTestimonials";

  const [testimonials1,setData]=useState([]);

  const receiveData = async (url) => {
  

    console.log("fetching data");
  
  
    try{
    const res =  await fetch(url);
    const data = await res.json();
    setData(data);
   // console.log(testimonials1);
    }catch (error) {
      console.log(error);
    }
  
  }

 
  useEffect(() => {
    receiveData(API);
  }, [] );


  console.log(testimonials1);


  return (
    <div className="antialiased bg-back leading-normal font-text text-front">

      <Header initials={profile.initials} />

      
      <Reviews testimonials={testimonials1} />

    <div className="flex justify-center">
         <TestimonialFormCard />
 </div>




      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  )
}

export default Testimonials

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
        formspreeEndpoint
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
   
  }
`