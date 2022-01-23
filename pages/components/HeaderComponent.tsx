import corner1 from '../../public/images/corner1-2x.png'
import classNames from 'classnames'
import { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import menu from '../../public/images/menu.png'
import close from '../../public/images/close.png'
import Image from 'next/image';
import Link from 'next/link';



function HeaderComponent(props){
    var click = false;
    var checked = props.checked == "dark"
    
    const handleclick = (event)=>{
      click = true;
      setcurrent(event)
    }
    const [current,setcurrent] = useState(props.item)
    const [isopen,setisopen] = useState(false)

    { if(current!=props.item && !click){ setcurrent(props.item) } }

    click = false
    
    return(
        <header className=" w-screen h-28
        fixed 
        z-50">
        <div className='absolute
         -top-44
         -left-48  
         w-96
         h-92
         md:max-w-md  
         md:max-h-96 
         md:-left-24
         md:-top-56'>   
        <Image src={corner1} alt="">
         </Image>
         </div> 
        <div className="flex
        w-screen
        cursor-pointer
        mt-2.5 sm:mt-2" >
        <p className= {classNames(`dark:text-white text-black`, 
        "ml-11 md:ml-40 sm:ml-24  cursor-pointer",
        "text-sm md:text-lg sm:text-base",
        "font-MontSerrat font-semibold")}>Ruchit
        </p>
        <p className={classNames(`dark:text-white text-black`, 
        "ml-1 cursor-pointer",
        "text-sm md:text-lg sm:text-base",
        "font-MontSerrat font-semibold")}>Patel
        </p>
        <ul className= { classNames(
        'font-MontSerrat font-medium',
        'text-base w-56 md:w-96 sm:w-52 sm:h-56 sm:text-center sm:items-center sm:py-4',
        `dark:text-white text-black`,
        'list-none',
        'flex',
        'flex-row sm:flex-col',
        'justify-between',
        `right ml-auto ${isopen ? "sm-[transform sm:visible ease-in transition-all duration-300  translate-x-0]" : "sm-[transform sm:hidden overflow-auto ease-linear transition-all duration-300]"}`,
         'mr-5  sm:mr-0 sm:bg-gradient-to-tr from-primary to-secondary') }>
            <div className="flex ml-3 md:ml-0 flex-col">
            <li className={current==='Home'? classNames('font-Montserrat sm:text-white font-semibold','text-sm md:text-lg'):classNames('font-Montserrat font-medium sm:text-white','text-xs md:text-lg')} onClick={()=> handleclick("Home")}>
            <Link  href="#home">
            Home
            </Link>
            </li>
           {current==='Home'? <div className="w-5 h-1 rounded-2xl bg-gradient-to-r from-primary to-secondary"></div> : null} 
            </div>
            <div className="flex ml-3 md:ml-0 flex-col">
            <li className={current==='My Work'? classNames('font-Montserrat font-semibold sm:text-white','text-sm md:text-xl'):classNames('font-Montserrat font-medium sm:text-white','text-xs md:text-lg')} onClick={()=> handleclick("My Work")}>
            <Link href="#projects">
            My Work
            </Link>    
            </li>
           {current==='My Work'? <div className="w-5 h-1 rounded-2xl bg-gradient-to-r from-primary to-secondary"></div> : null} 
            </div>
            <div className="flex ml-3 md:ml-0 flex-col">
            <li className={current==='Services'? classNames('font-Montserrat font-semibold sm:text-white','text-sm md:text-xl'):classNames('font-Montserrat font-medium sm:text-white','text-xs md:text-lg')} onClick={()=> handleclick("Services")}>
            <Link  href="#services">
            Services
            </Link>
            </li>
           {current==='Services'? <div className="w-5 h-1 rounded-2xl bg-gradient-to-r from-primary to-secondary"></div> : null} 
            </div>
            <div className="flex ml-3 md:ml-0 flex-col">
            <li className={current==='Contact'? classNames('font-Montserrat font-semibold sm:text-white','text-sm md:text-xl'):classNames('font-Montserrat font-medium sm:text-white','text-xs md:text-lg')} onClick={()=> handleclick("Contact")}>
            <Link  href="#contact">
            Let's Talk
            </Link>
            </li>
           {current==='Contact'? <div className="w-5 h-1 rounded-2xl bg-gradient-to-r from-primary to-secondary"></div> : null} 
            </div>
            <div className="mt-1">
        <DarkModeToggle
       onChange={ props.onChange }
       checked={ checked }
       size={40}/>
       </div>
        </ul>
       <div className='md:hidden absolute right-2 p-1 sm-[visible w-7 h-7]'> <Image src={ isopen ? close : menu} onClick={ function () { isopen ? setisopen(false) : setisopen(true) } }></Image> </div>
        </div>
    </header>
    )
}
export default HeaderComponent