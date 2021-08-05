import Image from "next/image"
import bg from '../bigImage.png'
import Header from "./Header"
function Firstpart() {
    return (
        <div className="h-15 w-10">
            <Image 
            src={bg}
            layout='fill'
            objectFit='cover'
            className=''
            />
            <Header />
        </div>
    )
}

export default Firstpart
