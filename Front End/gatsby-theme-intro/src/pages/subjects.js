import React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import { graphql } from "gatsby"




const SubjectPage = ({ data }) => {


  const { profile,  site} = data
  return (

    <div className="antialiased bg-back leading-normal font-text text-front">

    <Header initials={profile.initials} />


    
    <div className="flex flex-col items-center justify-center">

      <div className="container mx-auto p-4">
        <h1 className="font-header font-light text-2xl text-front leading-tight mb-4 text-center">
        Rates: S$ 420 (Yr 3/4) and S$450 (Yr 5/6) for 4 classes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded shadow-md">
            <StaticImage
              src="../images/math.svg"
              alt="Subject 1"
              className="w-full rounded"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            IB Math AA SL/HL group lessons (small groups)
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li> Groups are small and from the same school to avoid any confusion.</li>
              <li>Recorded lectures so that students can revise again from home.</li>
              <li>unlimited Whatsapp consultation for immediate doubt clearing anytime anywhere.</li>
              <li>Notes and handouts given for each topic.</li>
              <li>Tons of resources provided from past papers as well as in house designed worksheets.</li>
              <li>Regular tests conducted after lessons and parents will be kept up to date with progress.</li>
              <li>Online platform for students for all the resources provided by me.</li>
              <li>Student may opt in to join via Skype or zoom if she/he feels unwell. But face to face is encouraged.</li>
              <li>IA/EE help is provided after class (on Mondays) over zoom or Skype.</li>
              <li>Free youtube live session during exam week for all last minute doubts and quick recap.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded shadow-md">
            <StaticImage
              src="../images/physics.jpg"
              alt="Subject 2"
              className="w-full rounded"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            IB Physics SL/HL group lessons (small groups)
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
                Groups of IB Physics classes in Singapore are small and from the same school to avoid any confusion.
              </li>
              <li>
                Recorded lectures of IB Physics group lessons in Singapore so that students can revise again from home.
              </li>
              <li>
                Unlimited WhatsApp consultation for immediate doubt clearing anytime anywhere.
              </li>
              <li>
                Notes and handouts given for each topic.
              </li>
              <li>
                Tons of resources provided from past papers as well as in-house designed worksheets.
              </li>
              <li>
                Regular tests conducted after lessons and parents will be kept up to date with progress.
              </li>
              <li>
                Online platform for students for all the resources provided by me.
              </li>
              <li>
                Students may opt-in to join via Skype or Zoom if they feel unwell, but face-to-face is encouraged.
              </li>
              <li>
                IA/EE help is provided after class (On Mondays) over Zoom or Skype.
              </li>
              <li>
                Free YouTube live session during exam week for all last-minute doubts and quick recap.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

   

    <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />

    </div>

  )
}

export default SubjectPage

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