class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pets: {},
      currentPet: 0,
      pic: '#'
    }
  }

  componentDidMount () {
    fetch('/api')
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      this.setState({ 'pets': json })
      if (this.state.pets[2].photos[0]) {
        console.log('test', this.state.pets[0].photos[0].small)
        this.setState({ 'pic': this.state.pets[0].photos[0].small })
      }
    })
  }

  nextPet () {
    console.log('Noop')
    let newCurrentPet = this.state.currentPet + 1
    this.setState({ 'currentPet': newCurrentPet })
    this.setState({ 'pic': this.state.pets[newCurrentPet].photos[0].small })
  }

  render () {
    return (
      <div className='home'>
        <img className='pic' src={this.state.pic} />
        <div className='info' />
        <button onClick={() => this.nextPet()}>
          Noop
        </button>
        <button onClick={() => alert('Boop!')}>
          Boop
        </button>
      </div>
    )
  }
}

export default Home
