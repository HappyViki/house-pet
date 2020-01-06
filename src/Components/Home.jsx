class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pets: {},
      currentPet: 0,
      current: {
        id: 0,
        src: '#',
        distance: null,
        url: ''
      }
    }
  }

  componentDidMount () {
    let pets = window.localStorage.getItem('pets')
    if (pets === null) {
      pets = this.fetchPets()
      console.log('Loaded new pets', pets)
    } else {
      pets = JSON.parse(pets)
      console.log('Loaded old pets', pets)
    }
    this.setState({ pets: pets }, () => {
      this.setPet(0)
    })
  }

  fetchPets () {
    fetch('/api')
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
    })
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
      }})
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

  clearCache () {
    window.localStorage.removeItem('pets')
    window.localStorage.removeItem('myPets')
    console.log('No more saved pets :(')
  }

  render () {
    let distanceMessage = "Location wasn't provided."
    if (this.state.current.distance !== null) {
      distanceMessage = `You are ${this.state.current.distance} miles away from this pet.`
    }

    return (
      <div className='home'>
        <img className='pic' src={this.state.current.src} />
        <div className='info'>
          <b>Distance from your location:</b><br />
          {distanceMessage}
        </div>
        <button onClick={() => this.nextPet()}>
          Noop
        </button>
        <button onClick={() => this.savePet()}>
          Boop
        </button>
        <div>
          <b>Dev Tools:</b>
          <button onClick={() => this.fetchPets()}>
            Fetch Pets
          </button>
          <button onClick={() => this.clearCache()}>
            Clear Cache
          </button>
        </div>
      </div>
    )
  }
}

export default Home
