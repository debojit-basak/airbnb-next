import Image from "next/image"
import bg from '../bigImage.png'
import Header from "./Header"
function Firstpart() {
    return (
       
            <Image 
            src={bg}
            layout='fill'
            objectFit='cover'
            className='absolute h-50 w-50'
            />
           
        
    )
}

export default Firstpart
