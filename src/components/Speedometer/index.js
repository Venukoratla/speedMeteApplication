import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    // eslint-disable-next-line consistent-return
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
    })
  }

  onDecrement = () => {
    // eslint-disable-next-line consistent-return
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {count}mph</h1>
        <p className="statement">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button onClick={this.onIncrement} className="increase">
            Accelerate
          </button>
          <button onClick={this.onDecrement} className="decrease">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
