class Dashboard extends React.Component {
  constructor (props) {
    super(props)

    let myPets = window.localStorage.getItem('myPets')
    if (myPets !== null) {
      myPets = JSON.parse(myPets)
      this.state = {
        myPets: myPets
      }
    }
  }

  render () {
    return (
      <div className='dashboard'>
        <h1>Dashboard</h1>
        {this.state.myPets.map((petId) => {
          return <div key={petId}>{petId}</div>
        })}
      </div>
    )
  }
}

export default Dashboard
