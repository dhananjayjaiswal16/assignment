import React from 'react'
import { useLocation } from 'react-router'
import Navbar from '../components/Navbar';
import { postData } from "../dummyData"

const Post = () => {
  const location = useLocation();
  const postNumber = location.pathname.split("/")[3];
  const data = postData[postNumber - 1];
  console.log("data", data);
  console.log("post num ", postNumber);
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
