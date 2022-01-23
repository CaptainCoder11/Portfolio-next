import Roll from 'react-reveal/Roll'
import Flip from 'react-reveal/Flip'
import Image from 'next/image';

 
function Project(props){
    return(
    <div className="flex mt-20 h-screen p-10 sm:p-2 cursor-pointer" onClick={()=> window.open(props.url, "_blank")}>
   <Roll left>
   <div className="sm:h-auto sm:w-10/12 h-2/3 w-2/5 p-5 md:p-1"><Image layout="responsive" className="rounded-full" src={props.image} alt=""></Image></div>
   </Roll>
   <Flip top>
    <div className="flex flex-col">    
    <h1 className=" bg-clip-text
    text-xl
    md:text-4xl 
    ml-4 
    text-transparent
    font-Montserrat
    font-semibold  
    bg-gradient-to-r 
    from-primary
    via-indigo-500 
    to-secondary">{props.title}</h1>
    
    <div className="bg-clip-text
    h-4/5
    overflow-scroll
    p-3
    text-xl
    md:text-2xl  
    ml-4 
    whitespace-pre-line
    text-transparent
    font-Montserrat
    font-extralight  
    bg-gradient-to-r 
    from-primary
    to-secondary">{props.description}
    </div>
 
    </div>
    </Flip>
    </div>
   
    )
    
}
export default Project;