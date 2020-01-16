import React from 'react'

function Card (props) {
  return (
    <div className='card'>
      <figure className='image image-container'>
        <img src={props.src} />
      </figure>
      <div className='content'>
      Distance: {props.distance} miles away<br />
        <a href={props.url}>Go to pet on Petfinder.com</a>
      </div>
      <div className='buttons'>
        <button className='button is-danger' onClick={props.deletePet}>
          unBoop
        </button>
      </div>
    </div>
  )
}

export default Card
