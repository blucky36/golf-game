import React, { Component } from 'react'
import Ball from "./components/ball.js"
// import Dude from "./components/dude.js"s
import One from "./components/hole1.js"
import './App.css'

// const mouse = {
//   x: innerWidth / 2,
//   y: innerHeight / 2
// }//unexpected use of globals

class App extends Component {

  state={
    canvas:document.querySelector("canvas"),
    canvasRef:React.createRef(),
  }

  componentDidMount() {
    const canvas = this.state.canvasRef.current
    const context = canvas.getContext("2d")
    // let ball = new Ball(10,10,10,"black")
    // context.fillRect(0, 0, canvas.width, canvas.height)//fills canvas black

    /////////////Canvas Event Listeners/////////////////////////////unexpected use of globals
    // this.state.canvas.addEventListener('mousemove', event => {
    //   this.state.mouse.x = event.clientX
    //   this.state.mouse.y = event.clientY
    // })
    //
    // this.state.canvas.addEventListener('resize', () => {
    //     this.state.canvas.width = innerWidth
    //     this.state.canvas.height = innerHeight
    //
    //     init()
    // })
    /////////////////////////////////////////////////////////////////
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

  render() {
    return (
      <div className="App">
        <canvas ref={this.state.canvasRef}>
          {/*<Dude/>*/}
          <One/>
        </canvas>
        <Ball/>
      </div>
    );
  }
}

export default App;
