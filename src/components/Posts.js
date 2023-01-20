import React from 'react'
import { Link } from 'react-router-dom'

function Posts({ id, desc }) {
  return (
    <div className="posts-list">
      <Link to={`/account/post/${id}`}>{desc}</Link>
    </div>
  )
}

export default Posts
