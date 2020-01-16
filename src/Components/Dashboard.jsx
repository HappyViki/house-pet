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
      myPets: myPets,
      stuff: ''
    }
  }

  deletePet (petId) {
    const storage = window.localStorage
    let myPets = JSON.parse(storage.getItem('myPets'))
    console.log('myPets', myPets)
    delete myPets[petId]
    this.setState({myPets: myPets})
    myPets = JSON.stringify(myPets)
    storage.setItem('myPets', myPets)
  }

  listSavedPets () {
    if (this.state.myPets !== null) {
      return this.state.myPets.map((pet, index) => {
        return <Card key={index} deletePet={() => this.deletePet(pet.id)} id={pet.id} src={pet.src} distance={pet.distance} url={pet.url} />
      })
    }
  }
  componentDidMount () {
    let stuff = this.listSavedPets()
    this.setState({stuff: stuff})
  }

  render () {
    return (
      <div className='page'>
        {this.state.stuff}
      </div>
    )
  }
}

export default Dashboard
