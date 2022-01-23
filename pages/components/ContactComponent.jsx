import Wave from 'react-wavify'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


function ContactComponent(){


    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [message,setmessage] = useState()

   

    const contact = (e) => {
      e.preventDefault();
      var templateParams = {
        name: name,
        email : email,
        notes: message
    };
     emailjs.send('service_0hfnrjl', 'template_32drdnf' , templateParams , 'user_MJgGFSwTigtpxpzHX7MNm')
      .then((result) => {
          console.log(result.text);
          if(result.text === 'OK')
          {
            alert('Thankyou! I will get back to you ASAP')
          }
      }, (error) => {
          console.log(error.text);
      });
    }

    return(
        <div id="contact" className="flex w-screen h-auto">
        <div className= "w-screen h-4/5 rounded-3xl shadow-xl ml-auto mr-auto">
        <form className="flex relative flex-col">     
        <div className="z-50 p-6 px-10">
        <h1 className="text-white font-MontSerrat font-extrabold text-2xl m-5">Contact Me</h1>
         <div className="flex flex-col m-4  mb-4">
            <label className="block font-MontSerrat text-white font-extrabold text-lg mb-2">
             Name
            </label>
            <input className="shadow font-MontSerrat appearance-none border rounded h-7 w-3/4 md:w-2/5 py-5  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={ (e) => {setname(e.target.value) }} id="username" type="text" placeholder="Enter Your Name"/>
          </div>
            
          <div className="flex flex-col m-4  mb-4">
            <label className="block font-MontSerrat text-white font-extrabold text-lg mb-2">
             Email
            </label>
            <input className="shadow font-MontSerrat appearance-none border rounded h-7 w-3/4 md:w-2/5 py-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={ (e) => {setemail(e.target.value) }} id="username" type="text" placeholder="Enter Your Email Address"/>
          </div>
          <div className="flex flex-col m-4  mb-4">
            <label className="block font-MontSerrat text-white font-extrabold text-lg mb-2">
            Message
            </label>
            <textarea className="shadow bg-white font-MontSerrat appearance-none border rounded-lg  h-3/5 w-3/4 md:w-2/5 py-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={ (e) => {setmessage(e.target.value) }} id="username" placeholder="Enter Your Message"/>
          </div>
          <input type="submit" value="Send" onClick={contact} className=" bg-yellow-400 m-5 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"/>
    
          </div>
        <Wave className="absolute bottom-0 -top-9 w-screen" fill="url(#gradient)" options={{ speed: 0.35 }}>
        <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)" >
        <stop offset="10%"  stopColor="#EE2455" />
        <stop offset="90%" stopColor="#22A2D5" />
        </linearGradient>
        </defs>
        </Wave>
        </form>
        
        </div>

        </div>
    )
}
export default ContactComponent