// NEXTJS COMPONENTS
import Head from 'next/head'
import Image from 'next/image'
// components
import Nav from '../components/Nav'

// assets
import profilePic from '../public/profilePic.jpg'


export default function Home() {
  return (
    <div className='h-full'>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs and Tailwind" />
      </Head>
      <Nav />
      <header className=' bg-zinc-100 h-screen'>
        <div className='container mx-auto grid grid-cols-2'>
          <div className='place-self-start mt-16 ml-20'>
            <h1 className='text-4xl'>Hey, I'm Alex  👋</h1>
            <p className='py-8 w-3/4'>I'm a front-end developer. I like to blend technical topics with a love of art to create websites.</p>
            <button className='mr-2 uppercase'>Portfolio</button>
            <button className='ml-2 uppercase'>Resume</button>
          </div>

          <div className='place-self-center'>
            <Image
              className='rounded-full'
              src={profilePic}
              width={350}
              height={350}
              placeholder='blur'
            />
          </div>
        </div>
      </header>






    </div>
  )
}
