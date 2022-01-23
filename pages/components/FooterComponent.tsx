import corner2 from '../../public/images/Corner2@2x.png'
import Image from 'next/image'
function FooterComponent(){
    return(
        <footer>
            <div className="
         fixed 
         w-96
         h-[358px]
        -bottom-32
        -right-52   
         md:w-80
         md:-bottom-32 
         md:-right-40
         md:max-h-96">
        <Image 
         src={corner2}
         alt="">
         </Image>
         </div>
        </footer>
    )
}
export default FooterComponent