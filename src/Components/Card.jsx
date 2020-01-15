import React from 'react'

function Card (props) {
  console.log('Card', props)
  return (
    <section className='section'>
      <img src={props.src} />
      <p>Distance: {props.distance} miles away</p>
      <a href={props.url}>Go to pet on Petfinder.com</a>
    </section>
  )
}

export default Card
