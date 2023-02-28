import React from 'react'
const contenful = require("contentful");

import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Image from 'next/image';

import externalLink from "../../public/icon-external-link.png"


// CONTENTFUL CLIENT INIT
const client = contenful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps(context) {

    const projects = await client.getEntries({ content_type: 'project', order: "-sys.createdAt" })

    console.log(projects);

    const formattedProjects = projects.items.map((item) => {
        return {
            allData: item,
            name: item.fields.projectName,
            slug: item.fields.slug,
            summary: item.fields.summary.content[0].content[0].value,
            link: item.fields.link,
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

    console.log(formattedProjects)

    const projectTemplate = formattedProjects.map(project => {
        return (
            <div className='portfolio__card' key={project.slug}>
                <div>
                    <h2 className='portfolio__card-title'>{project.name}</h2>
                    <a className='portfolio__card-link--ext' href={project.link}>code <Image src={externalLink}/></a>
                    <p className='portfolio__card-summary'>{project.summary}</p>
                    <a className="portfolio__card-link--int" href={`/portfolio/${project.slug}`}>Read More</a>
                </div>
                <div>
                    <ul>
                        {project.technology.map(tag => <li className='portfolio__card-tag' key={tag}>{tag}</li>)}
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