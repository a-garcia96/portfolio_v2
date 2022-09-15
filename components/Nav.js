import React from 'react'
import Link from 'next/Link'


export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        <a>Projects</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
