import React from 'react'
const contenful = require("contentful");

import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Tag from '../../components/Tag/Tag'
import Image from 'next/image'

import externalLink from "../../public/icon-external-link.png"


// CONTENTFUL CLIENT INIT
const client = contenful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps(context) {

    const projects = await client.getEntries({ content_type: 'project', order: "-sys.createdAt" })

    console.log(`unformatted projects: ${projects}`);

    const formattedProjects = projects.items.map((item) => {
        return {
            allData: item,
            name: item.fields.projectName,
            slug: item.fields.slug,
            summary: item.fields.summary.content[0].content[0].value,
            repoLink: item.fields.repoLink,
            liveLink: item.fields.liveLink,
            technology: [...item.fields.technologyUsed]
        }
    })


    return {
        props: {
            formattedProjects
        }
    }
}

const portfolio = ({ formattedProjects }) => {

    const projectTemplate = formattedProjects.map(project => {
        return (
            <div className='portfolio__card' key={project.slug}>
                <div>
                    <h2 className='portfolio__card-title'>{project.name}</h2>
                    <div className='portfolio__card-linkWrapper'>
                        <a className='portfolio__card-link--ext' href={project.repoLink}>code <Image alt="external link" src={externalLink} /></a>
                        <a href={project.liveLink} className="portfolio__card-link--ext">Live Site <Image alt="external link" className="linkIcon" src={externalLink} /></a>
                    </div>

                    <p className='portfolio__card-summary'>{project.summary}</p>
                    <a className="portfolio__card-link--int" href={`/portfolio/${project.slug}`}>Read More</a>
                </div>
                <div>
                    <ul className='portfolio__tag-wrapper'>
                        {project.technology.map((tag) => <Tag key={tag} tag={tag} />)}
                    </ul>
                </div>
            </div>
        )
    })

    return (
        <>
            <Nav />
            <main>
                <div className="container">
                    <section>
                        {projectTemplate}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default portfolio