import linkedin from '../../public/images/linkedin.png'
import github from '../../public/images/github.png'
import instagram from '../../public/images/instagram.png'
import classNames from 'classnames'
import Typist from 'react-typist';
import Image from 'next/image';


function PersonalInfo(props){

 return(
    <div className="mt-36 ml-auto mr-50 md:mr-60 px-10">    
    <Typist avgTypingDelay={110} 
     cursor={{  show: false }}
    >
    <div className="flex flex-row">
    <h2 className=" text-2xl md:text-4xl 
    font-Montserrat
    font-extralight
    text-transparent 
    text-primary">
      HI I'M
    </h2>
    <h2 className="text-2xl md:text-4xl 
    ml-2 
    font-Montserrat
    font-semibold
    text-transparent
    bg-clip-text 
    bg-gradient-to-r 
    from-primary 
    to-secondary">
      RUCHIT PATEL
    </h2>
    </div>
    </Typist>
    <p className="text-primary font-Montserrat">FULL STACK DEVELOPER / SOFTWARE GENERALIST</p>
    <div className="h-0.4 
    bg-gray-300 
    mt-4"></div>
    <div className="flex flex-row mt-5">
    <h4 className={classNames(`text-black dark:text-white`,
    "text-lg md:text-xl",
    "font-Montserrat font-extralight")}>A Young</h4>
    <h3 className=" text-primary 
    ml-1 
    text-2xl 
    font-Montserrat
    font-normal">Software Developer</h3>
    <h4 className={classNames(`text-black dark:text-white`,
    "text-lg md:text-xl",
    "ml-1",
    "mt-1",
    "font-Montserrat font-extralight")}>with</h4>
    </div>
    <h4 className={classNames(`text-black dark:text-white`,
    "text-lg md:text-xl",
    "mt-1",
    "font-Montserrat font-extralight")}>Skills in Mobile and Web Application Development.</h4>
    
    <h2 className="font-Montserrat font-extralight
    mt-10 
    text-gray-500 dark:text-gray-300"
    >Social Network</h2>
    <div className="flex 
    flex-row 
    mt-4">
      <a href="https://www.linkedin.com/in/ruchit-patel-2808871b7/"><div className="p-1 md:p-0 w-9 h-9"> <Image src={linkedin} alt=""/> </div> </a>
      <a href="https://github.com/Captaincoder11"><div className="p-1 md:p-0 w-9 h-9 ml-10"> <Image src={github} alt=""/></div></a>
      <a href="https://www.instagram.com/mrpatel_33/"><div className="p-1 md:p-0 w-9 h-9 ml-10"><Image src={instagram} alt=""/></div></a>
    </div>
    <div className="flex flex-row mt-7">
      <button onClick={props.portfolio} className=" w-40 md:w-48
      h-10 md:h-11
      rounded-3xl
      font-MontSerrat
      text-white
      bg-primary
       tracking-widest
        shadow-2xl shadow-primary
       font-extralight">PORTFOLIO</button>
       <a href="https://docs.google.com/document/d/1HZZsuJfw8jzJj6vzJxX13iiNZsrqoovQdVYFJOAqKhE/edit?usp=sharing">
      <button className="w-40 md:w-48
      h-10 md:h-11
      ml-7
      rounded-3xl 
      font-MontSerrat
      text-secondary bg-transparent 
      border 
      shadow-2xl shadow-secondary
      border-secondary
       tracking-widest 
       font-extralight">RESUME</button>
       </a>
    </div>
    </div> 
 )
}
export default PersonalInfo;