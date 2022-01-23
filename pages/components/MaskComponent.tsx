import styled from "styled-components";
import { useSpring, animated, config } from 'react-spring';
import me from '../../public/images/me2x.png'
import Image from "next/image";

const ImgContainer = styled(animated.div)`
  position : relative;
  visibility: visible; 

  @media only screen and (max-width: 640px){
    position : relative; 
    visibility: hidden; 
    display:none;
  }
`;
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function MaskComponent(){
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return(
        <div className="ml-24 mt-24 sm:ml-0">
        <ImgContainer 
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}
        >
        <div> <Image  src={me}></Image> </div>
      </ImgContainer>
      </div>
    )
}
export default MaskComponent