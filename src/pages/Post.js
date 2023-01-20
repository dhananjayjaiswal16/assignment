import React from 'react'
import { useLocation } from 'react-router'
import Navbar from '../components/Navbar';
import { postData } from "../dummyData"
import NotFound from './NotFound';

const Post = () => {
  const location = useLocation();
  const postNumber = location.pathname.split("/")[3];
  const data = postData[postNumber - 1];
  if (!data) {
    return <NotFound />
  }
  return (
    <>
      <Navbar />
      <div className="post-container">
        <h1>{data.title}</h1>
        <p>{data.para1}</p>
        <p>{data.para2}</p>
      </div>
    </>
  )
}

export default Post
