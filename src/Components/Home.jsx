import React from 'react'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: '',
      pets: null,
      currentPet: 0,
      current: {
        id: 0,
        src: '#',
        distance: null,
        url: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.fetchPets()
  }

  fetchPets () {
    let params = ''
    console.log("state location", this.state.location);
    if (this.state.location != '') {
      params = '?location='+this.state.location
    }
    return fetch('/api'+params)
      .then(response => {
        return response.json()
      })
      .then(json => {
        const petsWithPics = json.filter((pet) => {
          if (pet.photos.length > 0) {
            return pet
          }
        })
        const pets = JSON.stringify(petsWithPics)
        window.localStorage.setItem('pets', pets)
        return petsWithPics
      }).then( pets =>
        this.setState({ pets: pets }, () => {
          console.log('Loaded new pets', pets)
          this.setPet(0)
        })
      )
  }

  nextPet () {
    console.log('Next pet!')
    let newCurrentPet = this.state.currentPet + 1
    if (newCurrentPet > this.state.pets.length - 1) {
      newCurrentPet = 0
    }
    this.setState({ currentPet: newCurrentPet })
    this.setPet(newCurrentPet)
  }

  setPet (currentPet) {
    if (this.state.pets !== null && this.state.pets !== undefined) {
      let newSrc = '#'
      if (this.state.pets[currentPet].photos.length > 0) {
        newSrc = this.state.pets[currentPet].photos[0].medium
      }
      this.setState({
        current: {
          id: this.state.pets[currentPet].id,
          src: newSrc,
          distance: this.state.pets[currentPet].distance,
          url: this.state.pets[currentPet].url
        }
      })
    }
  }

  savePet () {
    const storage = window.localStorage
    const newPetObject = {
      id: this.state.current.id,
      src: this.state.current.src,
      distance: this.state.current.distance,
      url: this.state.current.url
    }
    console.log('savePet', newPetObject)
    let myPets = storage.getItem('myPets') ? JSON.parse(storage.getItem('myPets')) : {}
    if (!myPets[newPetObject.id]) {
      myPets[newPetObject.id] = newPetObject
      myPets = JSON.stringify(myPets)
      storage.setItem('myPets', myPets)
    }
    // window.localStorage.getItem('myPets')
  }

  handleChange(event) {
    this.setState({location: event.target.value});
  }

  handleSubmit(event) {
    this.fetchPets()
    event.preventDefault();
  }

  render () {
    let distanceMessage = "Location wasn't provided."
    if (this.state.current.distance !== null) {
      distanceMessage = `You are ${this.state.current.distance} miles away!`
    }

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="ZIP Code" />
        <input type="submit" value="Locate" />
      </form>
      <br/>
      <div className='card'>
        <figure className='image image-container'>
          <img src={this.state.current.src} />
        </figure>
        <div className='content'>
          {distanceMessage}
        </div>
        <div className='buttons'>
          <button className='button is-warning' onClick={() => this.nextPet()}>
            Noop
          </button>
          <button className='button is-success' onClick={() => this.savePet()}>
            Boop
          </button>
        </div>
      </div>
      </>
    )
  }
}

export default Home
