import React from 'react'

// IMPORT COMPONENT
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import Image from 'next/image'

// IMPORT ASSETS

const about = () => {
    return (
        <>
            <Nav />
            <header>
                <div className="container">
                    <h1>About Me</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="about-grid">
                        <div className="about-col-1">
                            <p>
                                Hi my name is Alejandro Garcia, but I prefer going by my short name Alex. I am a San Diego native. Most would say I am lucky to live in such a perfect city, but personally having grown up here I have a crave to explore new places. I enjoy traveling the world and seeing more than just the beach.
                            </p>
                            <p>
                                I grew up loving art in any form it comes in. Cinema, photography, painting, graphic design, music, etc. If it requires being creative I am all for it. I myself do photography as a hobby. I have been doing it for 10 years now. It goes hand in hand with my love for traveling. I love to capture life and landscapes that we normally do not get to see in San Diego. The pictures shown here are just some of the thousands of photos I have taken over the course of my career.
                            </p>
                            <p>
                                I am also a very techincal and logically minded person. I love technology and being challenged by it. I grew up building computers with my father, learning how to spin up my own private game servers to play with friends and of course building websites.
                            </p>
                            <Image src={aboutMe1} alt="personal picture"/>
                            <Image src={aboutMe2} alt="personal picture" />
                        </div>
                        <div className="about-col-2">
                            <Image src={aboutMe3} alt="personal picture" />
                            <Image src={aboutMe4} alt="personal picture"/>
                            <Image src={aboutMe5} alt="personal picture"/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default about