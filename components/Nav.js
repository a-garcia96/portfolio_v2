import React from 'react'
import Link from 'next/Link'


export default function Nav() {
    return (
        <nav className='p-8'>
            <div className='container mx-auto grid grid-cols-2'>

                <div className='col'>
                    <h1 className='uppercase'>LOGO</h1>
                </div>

                <div className='col'>
                    <ul className='flex flex-row gap-x-6 justify-end'>
                        <li>
                            <Link href='/'>
                                <a className='uppercase text-blue-600'>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/portfolio'>
                                <a className='uppercase text-blue-600'>Portfolio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/blog'>
                                <a className='uppercase text-blue-600'>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a className='uppercase text-blue-600'>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    )
}
