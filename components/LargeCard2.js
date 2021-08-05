import Image from "next/image"
import i4 from '../i4.jpg'
function LargeCard2() {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={i4} layout='fill' objectFit="cover"
                className="rounded-2xl" />
            </div>
            <div className="absolute top-40 left-12">
                <h3 className="text-4xl text-white mb-3 w-64">Try Hosting</h3>
                <p className="text-white">Earn Extra money by sharing your space</p>
                <button className="text-sm text-black bg-white px-4 py-2 rounded-lg mt-5">Explore More</button>

            </div>

        </section>
    )
}

export default LargeCard2
