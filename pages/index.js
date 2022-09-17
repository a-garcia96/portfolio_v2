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
      <header className=' bg-zinc-100'>
        <div className='container mx-auto flex flex-col-reverse p-8'>
          <div className='my-8'>
            <h1 className='text-3xl'>Hey, I'm Alex  👋</h1>
            <p className='my-4'>I'm a front-end developer. I like to blend technical topics with a love of art to create websites.</p>
            <div className='flex flex-row items-center space-x-6'>
              <button className= 'w-2/4 rounded-md bg-slate-500 text-white py-2 shadow-md hover:shadow transition-all'>Portfolio</button>
              <button className='w-2/4 rounded-md bg-slate-500 text-white py-2 shadow-md hover:shadow transition-all'>Resume</button>
            </div>
          </div>

          <div>
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