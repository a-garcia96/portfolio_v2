import React from 'react'
import Link from 'next/Link'


export default function Nav() {
    return (
        <nav className='p-8'>
            <div className='flex flex-col md:container md:mx-auto md:flex md:flex-row'>
                <div className='w-full md:w-3/6'>
                    <h1 className='text-xl text-center md:text-start'>LOGO</h1>
                </div>
                <div className='w-full md:w-3/6'>
                    <ul className='flex flex-row justify-center mt-8 space-x-4 md:space-x-8 md:mt-0 md:justify-end'>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/portfolio'>
                                <a>Portfolio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/blog'>
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
