import React, {useState} from 'react';
import axios from 'axios';
import {ClipLoader} from 'react-spinners';


function BookForm({option1, option2, option3}) {

  // const [user,setUser] = useState({
  //   name:"",email:"",phone:"",message:""
  // });

  
  const [name,setname] = useState( "" );
  const [email,setemail] = useState( "" );
  const [phone,setphone] = useState( "" );
  const [message,setmessage] = useState( "" );

  const [isLoading, setIsLoading] = useState(false); 
  

  const handleNameInput = (e) => {

    setname(e.target.value);

  }

  const handlePhoneInput = (e) => {

    setphone(e.target.value);

  }
  const handleEmailInput = (e) => {


    setemail(e.target.value);


  }
  
  const handleMessageInput = (e) => {


    setmessage(e.target.value);

  }


  const sendmail = async (e) => {

    console.log("i am running");

    e.preventDefault();

    if(option1 === null || option2 === null || option3===null)
    {
      window.alert("Select from the Drop-Down");
    }

    else{

    setIsLoading(true);

    try {
      const response = await axios.post('https://gatsby-backend-5939a551ead9.herokuapp.com/api/mail/sendmail', { name:name, email: email, phone: phone, message: message, option1: option1.Name, option2: option2.Name, option3: option3.Name });
      if (response.status === 201) {
              console.log("success");
              window.alert("Registraion Successful");
              location.reload();
             
      }
    } catch (error) {
      console.log(error);
    }
    
    setIsLoading(false); 
  }
    }

  return (
    
    
  <div className="flex items-center justify-center p-12">
    {/* Author: FormBold Team */}
    {/* Learn More: https://formbold.com */}
    <div className="mx-auto w-full max-w-[550px]">
      <form method="POST" action="" onSubmit={sendmail}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameInput}
            required
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleEmailInput}
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            value={phone}
            onChange={handlePhoneInput}
            placeholder="Enter your Phone Number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            id="message"
            required
            value={message}
            onChange={handleMessageInput}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-lead focus:shadow-md"
            defaultValue={""}
          />
        </div>
        <div className="flex justify-center">
          <button className="hover:shadow-form rounded-md bg-lead py-3 px-8 text-base  cursor-pointer  font-semibold text-black outline-none"  
           type="submit"

        >{isLoading ? <ClipLoader loading color='#000000' size={30}/> : 'Submit'}</button>

        </div>
      </form>
    </div>
  </div>



  )
}

export default BookForm;