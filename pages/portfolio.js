import React from 'react';
import MaskComponent from './components/MaskComponent';
import PersonalInfo from './components/PersonalInfo';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import sun from '../public/images/sun.png'
import moon from '../public/images/moon.png'
import classnames from 'classnames';
import Project from './components/ProjectComponent';
import WifiScanner from '../public/images/WifiScanner.jpeg'
import UniversalCopy from  '../public/images/universalcopy.png'
import react from '../public/images/react.png'
import node from '../public/images/nodejs.png'
import angular from '../public/images/angularjs.svg'
import spring from '../public/images/spring.svg'
import fastapi from '../public/images/fastapi.png'
import docker from '../public/images/docker.png'
import aws from '../public/images/aws.svg'
import kubernetes from '../public/images/kubernetes.svg'
import tailwind from '../public/images/tailwind.svg'
import graphql from '../public/images/graphql.svg'
import ContactComponent from './components/ContactComponent.jsx';
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
import TictacToe from '../public/images/TicTacToe.png'
import Magnifier from '../public/images/magnifier.png'
import Head from 'next/head';
import Image from 'next/image';
import { Flip } from 'react-reveal';
import cookieCutter from 'cookie-cutter'
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';
import { useState , useRef } from 'react';
function Portfolio() {

  const prevScrollY = useRef(0);
  const [item, setitem] = useState('Home');

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    prevScrollY.current = currentScrollY;
    console.log(currentScrollY);


    if(currentScrollY > 200 && currentScrollY < 1700)
    {
      setitem('My Work')
    }
    else if(currentScrollY > 1700 && currentScrollY < 2300)
    {
      setitem('Services')
    }
    else if(currentScrollY > 2300)
    {
      setitem('Contact')
    }
    else{
      setitem('Home')
    }
  
   
  };

  const portfolio = (type, name) =>{
    html2canvas(document.querySelector(`#app`)).then(canvas => {
      let dataURL = canvas.toDataURL('image/png');

      if (type === 'pdf') {
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [14, 10]
        });

        pdf.addImage(dataURL, 'PNG', .6, .6);
        pdf.save(`${name}.pdf`);

      } else if (type === 'png') {
        var link = document.createElement('a');
        link.download = `${name}.png`;
        link.href = dataURL;
        link.click();
      }
    });
  }
  const { theme, setTheme } = useContext(ThemeContext)
  
  console.log(theme)

  const handleChange = ()=> {
    if(theme!='dark')
    {
    console.log('IF Called!');
    //cookieCutter.set('dark',true)
    setTheme("dark")
    }
    else{
     console.log('Else Called!');
     //cookieCutter.set('dark',false)
     setTheme("light")
    }
  }
  

  return (
      <div onScroll={onScroll} style={{scrollBehavior:'smooth'}} id="app" className={classnames(`overflow-y-scroll overflow-x-hidden flex-col  dark:bg-gray-800 bg-white`,
      "w-screen",
       "h-screen")}>
       <Head>
       <meta
      name="description"
      content="Ruchit Patel Full Stack Developer , Android Developer , CI/CD Devops"
    />
    <title>Ruchit Patel</title>
    <meta property='og:title' prefix="og:http://ogp.me/ns#" content='Ruchit Patel'/>
    <meta name="image" prefix="og:http://ogp.me/ns#" property="og:image" content="http://drive.google.com/file/d/1R0MTajn5aqiC2mic21eP6kcmKSmiqpFz/view?usp=sharing"/>
    <meta property="og:image:secure_url" content="https://drive.google.com/file/d/1R0MTajn5aqiC2mic21eP6kcmKSmiqpFz/view?usp=sharing" /> 
    <meta property="og:image:type" content="image/png" /> 
    <meta property="og:image:width" content="400" /> 
    <meta property="og:image:height" content="300" />
    <meta property='og:description' prefix="og:http://ogp.me/ns#" content='My Portfolio'/>

       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </Head>
        <HeaderComponent className="fixed" item={item} checked={theme} onChange={ handleChange}></HeaderComponent>
        <div className="flex py-10" id="home">
        <MaskComponent>
        </MaskComponent>   
        <PersonalInfo portfolio = { () => portfolio("pdf", "my-content")} ></PersonalInfo>
        </div>
        <div id="projects">
        <Project image={UniversalCopy} url="https://play.google.com/store/apps/details?id=com.camel.corp.universalcopy" title="Universal Copy" description={`
        Sometimes you want to copy text from an app or image and you cannot use the default Android long press?

        Universal Copy takes that pain away!

        In any app, activate the Universal Copy mode and select the text you want to copy, that's it!

        Copy text from any application: Facebook, Twitter, Instagram, Youtube, Tumblr, News Republic, Snapchat...


        With the Scanner mode, you can even copy text (latin characters only) from pictures, documents or any app where the developer blocked the normal mode (facebook lite...).`}></Project>   

       <Project image={TictacToe} url="https://github.com/CaptainCoder11/TicTacToe" title="Tic Tac Toe" description={
         `
         A Simple Tic Tac Toe Game game created in JAVA using SWING and MVC architecture
        
         Players can go online and play against each other remotely

         Custom fonts and sound effects for a better experience
         
         AI (Artificial Intelligence) to play with computer if player is alone

         3x3 and 5x5 grid
         `
       }></Project>

       <Project image={Magnifier} url="https://play.google.com/store/apps/details?id=com.smart.magnifier.glass.light.camera.tools" title="Smart Magnifier Glass - Magnifier Camera" description={
         `
         Smart Magnifier Glass - Magnifier Camera app is a productive application is designed for people with low eyesight and easy to see small text, 
         images, and objects. This application turns your phone into a digital magnifier.

        Feature of Smart Magnifier Glass - Magnifier Camera:

        # You can use the custom magnifying glass on the camera.
        # Led flashlight system provided to work in the dark.
        # You can also capture the screenshot.
        # View screenshot by zooming in and zooming out.
        # Mirror captured screenshot functionality is provided.
        # If you want to screen freezing, you can.
        # Camera zoom and digital zoom up to 4x current system.
         `
       }></Project>
        <Project image={WifiScanner} url="https://play.google.com/store/apps/details?id=com.wifi.thief.detector.password.block.admin.router" title="WiFi Scanner" description={` WiFi Scanner - Detect Who Use My WiFi 
        
        is Powerful WiFi Protector and WiFi blocker to Detect Who use my WiFi and Protect my wifi security and internet security.
      
        Do you know if someone is stealing my wifi network speed?

        Do you know Who Use My WiFi and connected to my wifi and wireless network without your permission?

        Do you know if neighbors may have access to your personal data?

        Do you know if someone are stealing my wifi when your connection is slow, and who is on My WiFi download something? 

        It can easily scan current wifi and see how many people or devices connected to your wifi router such as tplink/tp-link router, dlink router, netgear router or huawei router etc.` }></Project>   
       </div>

      <Flip id="services" top>
      <div className="grid grid-rows-2 grid-cols-4 gap-5 p-2 md:p-4  pl-28 sm:pl-16 pr-16 md:pl-40 md:pr-20 w-screen bg-gray-500" id="services">
      <svg className="w-20 h-16 md:w-24 md:h-24 p-2 md:p-4 sm:p-3 sm:py-1" viewBox="0 0 148 90" version="1.1"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="black"></path></svg>
      <div className="w-20 h-16 md:w-24 md:h-24 mt-10"> <Image src={tailwind} layout="responsive" alt=""></Image> </div>
      <svg className="w-20 h-16 md:w-24 md:h-24 p-2 md:p-4 sm:p-4" viewBox="0 0 118 94" ><path d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
      <div className="w-20 h-16 md:w-24 md:h-24  p-4 md:p-5 sm:px-2"><Image layout="responsive" src={node} alt=""></Image></div>
      <div className="w-20 h-16 md:w-24 md:h-24  p-2 md:p-2 sm:p-1 mt-5"><Image layout="responsive" src={angular} alt="AngularJS"></Image></div>
      <div className="w-28 h-16 md:w-32 md:h-24  py-4 md:py-5"><Image src={fastapi} alt="Fast Api"></Image></div>
      <div className="w-20 h-16 md:w-24 md:h-24 mt-5   " ><Image src={spring} layout="responsive" alt=""></Image></div>
      <div className="w-20 h-16 md:w-24 md:h-24 p-4 md:p-5 sm:p-2"><Image layout="responsive" src={docker} alt="Docker"></Image></div>
      <div className="w-20 h-16 md:w-24 md:h-24 p-4 md:p-5 sm:p-4"><Image layout="responsive" src={kubernetes} alt=""></Image></div>
      <div className="w-20 h-16 md:w-24 md:h-24 p-4 md:p-5 sm:p-4"><Image layout="responsive" src={aws} alt=""></Image></div>
      <div className="w-20 h-16 md:w-24 md:h-24 p-4 md:p-5 sm:p-4"><Image layout="responsive" src={graphql} alt=""></Image></div>

      </div>
      </Flip>

      <div id="contact">
      <ContactComponent></ContactComponent>
      </div>
        <FooterComponent className="fixed"/>
        </div>
  );
}

export default Portfolio;
