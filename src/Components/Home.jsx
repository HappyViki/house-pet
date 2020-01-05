class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pets: {},
      currentPetNum: 0,
      currentPetId: 0,
      currentPicSrc: '#',
      currentDistance: null
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
    this.setState({ 'pets': pets }, () => {
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
    let newcurrentPetNum = this.state.currentPetNum + 1
    if (newcurrentPetNum > this.state.pets.length - 1) {
      newcurrentPetNum = 0
    }
    this.setState({ currentPetNum: newcurrentPetNum })
    this.setPet(newcurrentPetNum)
  }

  setPet (currentPetNum) {
    let currentPicSrc = '#'
    if (this.state.pets[currentPetNum].photos.length > 0) {
      currentPicSrc = this.state.pets[currentPetNum].photos[0].medium
    }
    this.setState({
      currentPetId: this.state.pets[currentPetNum].id,
      currentPicSrc: currentPicSrc,
      currentDistance: this.state.pets[currentPetNum].distance
    })
  }

  savePet () {
    const storage = window.localStorage
    const newPetId = this.state.currentPetId
    let myPets = storage.getItem('myPets') ? JSON.parse(storage.getItem('myPets')) : []
    if (!myPets.includes(newPetId)) {
      myPets.push(newPetId)
      console.log(myPets)
      myPets = JSON.stringify(myPets)
      storage.setItem('myPets', myPets)
    }
    // window.localStorage.getItem('myPets')
  }

  clearPets () {
    window.localStorage.removeItem('myPets')
    console.log('No more saved pets :(')
  }

  render () {
    let distanceMessage = "Location wasn't provided."
    if (this.state.currentDistance !== null) {
      distanceMessage = `You are ${this.state.currentDistance} miles away from this pet.`
    }

    return (
      <div className='home'>
        <img className='pic' src={this.state.currentPicSrc} />
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
          <button onClick={() => this.clearPets()}>
            Clear Boops
          </button>
        </div>
      </div>
    )
  }
}

export default Home
