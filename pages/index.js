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
        <div className='container mx-auto grid grid-cols-2'>
          <div className='place-self-start mt-16 ml-20'>
            <h1 className='text-4xl'>Alex Garcia</h1>
            <p className='py-8 w-3/4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, rem obcaecati eligendi tenetur necessitatibus fuga ipsa dolorem sequi labore quas temporibus, magni sunt eaque at veniam, ullam assumenda saepe accusantium.</p>
            <button>Portfolio</button>
            <button>Resume</button>
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
