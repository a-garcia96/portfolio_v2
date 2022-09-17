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
      <header className='md:h-full bg-zinc-100 py-10'>
        <div className='flex flex-col-reverse p-8 md:container md:mx-auto md:flex-row md:justify-between md:items-center'>
          <div className='my-8 md:my-0 md:w-1/2'>
            <h1 className='text-3xl'>Hey, I'm Alex 👋</h1>
            <p className='my-4'>I'm a front-end developer. I like to blend technical topics with a love of art to create websites. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iste neque nulla distinctio, voluptates nisi, similique corrupti quibusdam natus velit mollitia? Dolores in dolorem unde quasi obcaecati magni cumque asperiores.</p>
            
            {/* BUTTONS */}
            <div className='flex flex-row items-center space-x-6'>
              <button className= 'w-2/4 rounded-md bg-slate-500 text-white py-2 shadow-md hover:shadow transition-all md:w-auto md:px-8 md:py-4'>Portfolio</button>
              <button className='w-2/4 rounded-md bg-slate-500 text-white py-2 shadow-md hover:shadow transition-all md:w-auto md:px-8 md:py-4'>Resume</button>
            </div>
          </div>

          <div className='md:w-1/2 md:justify-self-center'>
            <Image
              className='rounded-full'
              src={profilePic}
              width={450}
              height={450}
              placeholder='blur'
            />
          </div>
        </div>
      </header>






    </div>
  )
}