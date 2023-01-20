import React from 'react'

function Contact({ field, value }) {
  return (
    <div>
      <div className="contact">
        <span className="field">{field}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  )
}

export default Contact
