import React from 'react'

export default function Buttons({text, type}) {
  return (
    <button className={`btn-${type}`}>{text}</button>
  )
}
