class Dashboard extends React.Component {
  render () {
    return (
      <div className='dashboard'>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

const domContainer = document.querySelector('#root')
ReactDOM.render(Dashboard, domContainer)
