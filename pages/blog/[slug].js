import React from 'react'
import { useRouter } from 'next/router'

const post = () => {
  const router = useRouter()
  const { slug } = router.query



  return (
    <p>Slug: {slug}</p>

  )
}

export default post