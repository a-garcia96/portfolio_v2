import React from 'react'

const Tag = ({tag}) => {
  return (
    <li key={tag} className='tag'>
        {tag}
    </li>
  )
}

export default Tag