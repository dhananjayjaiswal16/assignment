import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import { contactData, postData } from "../dummyData"
const User = () => {
  return (
    <>
      <Navbar />
      <div className="user-container">
        <h5>Contact Information</h5>
        {contactData.map((data) => (
          <Contact field={data.field} value={data.value} />
        ))}
        <hr />
        <h5>Posts</h5>
        {postData.map((data) => (
          <Posts id={data.post_number} desc={data.title} />
        ))}
      </div>
    </>
  )
}

export default User
