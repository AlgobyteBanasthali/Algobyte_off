import React from 'react'
import './Feature.css'

const Feature = ({title, text}) => {
  return (
    <div className="algobyte__features-container__feature">
      <div className="algobyte__features-container__feature-title">
        <h1>{title}</h1>
        <div></div>
      </div>
      <div className='algobyte__features-container__feature-text '>
        {text}
      </div>
    </div>
  )
}

export default Feature