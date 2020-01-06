import React from 'react'
import Card from './Card.jsx'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)

    let myPets = window.localStorage.getItem('myPets')
    if (myPets !== null) {
      myPets = Object.values(JSON.parse(myPets))
    }

    this.state = {
      myPets: myPets
    }
  }

  listSavedPets () {
    if (this.state.myPets !== null) {
      return this.state.myPets.map((pet, index) => {
        return <Card key={index} id={pet.id} src={pet.src} distance={pet.distance} url={pet.url} />
      })
    }
  }

  render () {
    return (
      <div className='dashboard'>
        <h1>Dashboard</h1>
        {this.listSavedPets()}
      </div>
    )
  }
}

export default Dashboard
