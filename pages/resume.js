import React, { useState } from 'react'

import { Document, Page } from 'react-pdf'


const Resume = () => {

    const pdf = './myResume2023.pdf'

    return (
        <div>
            <h1>Resume!</h1>
            <Document file={pdf}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume