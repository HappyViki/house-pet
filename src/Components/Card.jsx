import React from 'react'

function Card (props) {
  console.log('Card', props)
  return (
    <div className='card'>
      <img src={props.src} />
      <p>Distance: {props.distance} miles away</p>
      <a href={props.url}>Go to pet on Petfinder.com</a>
    </div>
  )
}

export default Card
