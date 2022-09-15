import Head from 'next/head'

// components
import Nav from '../components/Nav'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs and Tailwind" />
      </Head>
      <Nav />
      <header>
        <div className='container'>
          <h1>Alex Garica</h1>
        </div>
      </header>






    </div>
  )
}
