import Image from "next/image"

function Banner() {
    return (
        <div className='relative mt-5 h-[200px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] max-w-[1500px] mr-auto ml-auto'>
            <Image 
            src='https://links.papareact.com/0fm'
            layout='fill'
            objectFit='cover'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-large'>Not sure there to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I am flexible</button>
            </div>
        </div>
    )
}

export default Banner
