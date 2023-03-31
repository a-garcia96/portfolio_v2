import React from 'react'

// IMPORT COMPONENT
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc eget lorem dolor. In egestas erat imperdiet sed euismod. Feugiat nisl pretium fusce id velit ut. Aenean pharetra magna ac placerat vestibulum lectus. Eu non diam phasellus vestibulum lorem. Egestas integer eget aliquet nibh praesent tristique magna. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Et netus et malesuada fames ac. Quam quisque id diam vel. Feugiat scelerisque varius morbi enim nunc.

                                Lobortis mattis aliquam faucibus purus in massa tempor. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Donec pretium vulputate sapien nec sagittis. Tellus cras adipiscing enim eu turpis egestas. Sit amet luctus venenatis lectus magna. Enim nulla aliquet porttitor lacus. Magna sit amet purus gravida. Volutpat diam ut venenatis tellus in metus vulputate. Ante metus dictum at tempor commodo ullamcorper a. Sit amet consectetur adipiscing elit ut. Augue interdum velit euismod in pellentesque massa placerat duis.
                            </p>
                            <img src="https://place-hold.it/562x421" alt="placeholder" />
                            <img src="https://place-hold.it/562x449" alt="placeholder" />
                        </div>
                        <div className="about-col-2">
                            <img src="https://place-hold.it/563x317" alt="placeholder" />
                            <img src="https://place-hold.it/561x421" alt="placeholder" />
                            <img src="https://place-hold.it/562x703" alt="placeholder" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default about