import React, {Component} from "react"

class GolfBall extends Component {

  componentDidMount(){
    let ball = new Ball
  }

  render(){
    init()
    animate()
    return (
      <div>tets</div>
    )
  }
}

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

function Ball(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

Ball.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

Ball.prototype.update = function() {
    this.draw()
}

// Implementation
let objects
function init() {
    objects = []

    for (let i = 0; i < 400; i++) {
        // objects.push()
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // objects.forEach(object => {
    //  object.update()
    // })
}

export default Ball
