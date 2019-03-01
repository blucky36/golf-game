import React, { Component } from 'react'
import GolfBall from "./components/ball.js"
import Dude from "./components/dude.js"
import One from "./components/hole1.js"
import './App.css'

class App extends Component {

  state={
    canvas:document.querySelector("canvas"),
    canvasRef:React.createRef(),
    ball: new GolfBall(10,10,10,"black")
  }

  componentDidMount() {

  }

  componentWillMount(){

  }

  componentWillUnmount(){

  }

  ///////////UTILS/////////////////

  randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }

  //////////END UTILS///////////////

  render(){
    this.state.ball.animate()
    return (
      <div className="App">
        <GolfBall/>
        <Dude/>
        <One/>
      </div>
    );
  }
}

export default App;
