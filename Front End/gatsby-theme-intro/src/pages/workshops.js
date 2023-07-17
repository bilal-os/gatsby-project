import React,{useState} from 'react';
import DropDown from '../components/Drop-Down/DropDown';
import DropDown1 from '../components/Drop-Down/DropDown1';
import DropDown2 from '../components/Drop-Down/DropDown2';
import "../styles/style.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { graphql } from "gatsby";
import BookForm from '../components/BookForm/BookForm';

function Workshops({ data }) {
  const { profile, site } = data;

  const [option1,setOption1] = useState(null);
  const [option2,setOption2] = useState(null);
  const [option3,setOption3] = useState(null);

  return (

    <div className="antialiased bg-back leading-normal font-text text-front">
      <Header initials={profile.initials} />

      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg p-6 rounded-lg mt-4 mx-96 mb-4 h-full w-full">
          <h1 className="text-center text-2xl font-bold mb-4">Book a Workshop</h1>

          <div className="flex justify-center space-x-4 mb-4">
            <DropDown selectedOption={option1} setSelectedOption={setOption1}/>
            <DropDown1 selectedOption={option2} setSelectedOption={setOption2}/>
            <DropDown2 selectedOption={option3} setSelectedOption={setOption3}/>
          </div>
        
      <BookForm option1={option1} option2={option2} option3={option3}/>       
      
      </div>
      </div>
      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  );
}

export default Workshops;

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