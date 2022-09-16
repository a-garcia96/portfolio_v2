// NEXTJS COMPONENTS
import Head from 'next/head'
import Image from 'next/image'
// components
import Nav from '../components/Nav'

// assets
import profilePic from '../public/profilePic.jpg'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs and Tailwind" />
      </Head>
      <Nav />
      <header className='p-8'>
        <div className='container mx-auto grid grid-cols-1 place-items-center'>
          <div>
          <Image
              src={profilePic}
              width={300}
              height={300}
              placeholder='blur'
            />
            </div>
            <h1 className='text-6xl p-8'>Alex Garcia</h1>
          {/* <div className='col'>
            <Image
              src={profilePic}
              width={500}
              height={500}
              placeholder='blur'
            />
          </div> */}
        </div>
      </header>






    </div>
  )
}
