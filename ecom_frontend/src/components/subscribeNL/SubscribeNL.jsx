import React from 'react'
import './SubscribeNL.css'

const SubscribeNL = () => {
  const handleSubmit = ()=>{
    return
  }
  return (
    <div className="subscribeNL-container">
      <div className="subscribe-left">
        <p>Stay Up to Date with Our Latest Offers</p>
      </div>
      <div className="subscribe-right">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address for newsletter"
            required
          />
          <button type="submit">Subscribe to Newsletter</button>
        </form>
      </div>
    </div>
  )
}

export default SubscribeNL
