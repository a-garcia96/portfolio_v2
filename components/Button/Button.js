import React from 'react'

export const Button = ( {children, classStyleName} ) => {
  return (
    <button className={`btn ${classStyleName}`}>{children}</button>
  )
}

export default Button;