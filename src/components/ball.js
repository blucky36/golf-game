import React, {Component} from "react"

class GolfBall extends Component {

  state={
    ball:null,
    canvas:null,
    c:null
  }

  constructor(x, y, radius, color) {
    super()
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.canvasRef = React.createRef()
  }

  draw() {
    this.state.c.beginPath()
    this.state.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.state.c.fillStyle = this.color
    this.state.c.fill()
    this.state.c.closePath()
  }

  update() {
    this.draw()
  }

  // Implementation

  init() {
    let ball = new GolfBall(this.state.canvas.width/2,this.state.canvas.height/2,1,10,"black")
    this.setState({...this.state,ball})
  }

  // Animation Loop
  animate(){
    // requestAnimationFrame(animate)
    this.state.c.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height)

    // this.c.fillText('HTML CANVAS BOILERPLATE', this.mouse.x, this.mouse.y)
  }

  componentDidMount(){
    const canvas = this.canvasRef.current
    const c = canvas.getContext('2d')
    this.setState({...this.state,canvas,c},()=>{
      this.init()
      this.animate()
    })
    // c.fillRect(0, 0, canvas.width, canvas.height)
  }

  render(){
    return (
      <div>
        <canvas ref={this.state.canvas}/>
      </div>
    )
  }
}

export default GolfBall
