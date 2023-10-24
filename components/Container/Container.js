import React from 'react'

const Container = ({children, classes}) => {
  return (
    <div className={`px-4 md:max-w-screen-md md:mx-auto ${classes}`}>{children}</div>
  )
}

export default Container