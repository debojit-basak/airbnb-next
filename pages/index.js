import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import Medium2 from '../components/Medium2'
import i1 from '../i1.jpg'
import i2 from '../i2.jpg'
import i3 from '../i3.jpg'
import i4 from '../i4.jpg'
import Firstpart from '../components/Firstpart'
import Image from "next/image"
import bgi from '../bigImage.png'
import LargeCard2 from '../components/LargeCard2'
export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="data:image/png;base64,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" />
      </Head>
     
      {/* <Firstpart /> */}
      <Header></Header> 
      {/* <section className="-mt-32 min-w-[300px]">
      <Image src={bgi} className="max-h-70 w-100   " />
      <p className="absolute top-32 left-12 mt-auto text-white font-weight-800 text-7xl py-60 px-20">Olympian &<br />Paralympian <br />Online <br />Experience</p>
      </section> */}
      {/* <Firstpart /> */}

      <Banner />
      {/* <LargeCard
        img='https://links.papareact.com/0fm'
        title="Not Sure where to go? perfect."
        description=""
        buttonText="Explore More"
        /> */}

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* pull some data from a server - API endPoint */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {
            exploreData?.map(({img, distance, location}) => (
              <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}/>
            //  console.log(location)
            ) )
          }
         </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(item => (
            <MediumCard
            key={item.img}
            img={item.img}
            title={item.title}
            />
          ))}
          </div>
        </section>
        

        <LargeCard
        img='https://links.papareact.com/4cj'
        title="the Greatest Outdoors"
        description="Whishlist curated by Airbnb"
        buttonText="Get Inspired"
        />
        <section>
        <h2 className='text-4xl font-semibold py-8'>Discover Things to do</h2>
        <div className="flex space-x-12 overflow-scroll scrollbar-hide p-6 -ml-0">
        <Medium2
        img={i1}
        text = 'Featured collection' />
        <Medium2 
        img={i2}
        text ='Online collection' />
        <Medium2
        img={i3}
        text ='Experiences'
        />
        </div>
        </section>
        <LargeCard2 />
        

      </main>
      <Footer />
      
      
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(
    res => res.json()
  );
  const cardsData = await fetch('https://links.papareact.com/zp1')
  .then((res) => res.json())
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}