class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { liked: false }
  }

  render () {
    if (this.state.liked) {
      return 'You liked this.'
    }

    return (
      <div className='home'>
        <img className='pic' src='#' />
        <div className='info' />
        <button>
          Noop
        </button>
        <button onClick={() => this.setState({ liked: true })}>
          Boop
        </button>
      </div>
    )
  }
}

const domContainer = document.querySelector('#root')
ReactDOM.render(<Home />, domContainer)
