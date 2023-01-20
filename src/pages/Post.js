import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router'
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import { postData } from "../dummyData"
import NotFound from './NotFound';

const Post = () => {
  const location = useLocation();
  const postNumber = location.pathname.split("/")[3];
  const data = postData[postNumber - 1];
  const isFetching = useSelector(state => state.isFetching)
  if (isFetching) {
    return <Spinner />;
  }
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
