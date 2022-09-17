import React from 'react'
import Link from 'next/Link'


export default function Nav() {
    return (
        <nav className='p-8'>
            <div className='md:container md:mx-auto flex flex-col'>
                <div className='w-full md:w-3/6'>
                    <h1 className='text-xl text-center fs'>LOGO</h1>
                </div>
                <div className='w-full md:w-3/6'>
                    <ul className='flex flex-col text-center mt-8 space-y-4'>
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
