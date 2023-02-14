import React from 'react'
import Image from 'next/image'

const InformationCard = ({imageSrc, heading, summaryText}) => {
  return (
    <div className='information-card'>
        {/* ICON or Image */}
        {/* Heading */}
        {/* Summary Text */}
        {/* CTA (IF NEEDED) */}
        <Image src={imageSrc}/>
        <h3 className='information-card__heading'>{heading}</h3>
        <p className='information-card__text'>{summaryText}</p>
    </div>
  )
}

export default InformationCard