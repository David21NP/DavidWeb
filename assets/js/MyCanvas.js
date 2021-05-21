class Line {
  p1 = { x: 0, y: 0 }
  p2 = { x: 0, y: 0 }
  p3 = { x: 0, y: 0 }
  p4 = { x: 0, y: 0 }
  offset = 0

  constructor(offset, yCenter, size) {
    this.p1 = { x: 0, y: yCenter }
    this.p2 = { x: size * 0.333, y: yCenter }
    this.p3 = { x: size * 0.666, y: yCenter }
    this.p4 = { x: size, y: yCenter }
    this.offset = offset
  }
}

export default class MyCanvas {
  canvas = null
  ctx = null
  width = 0
  height = 0
  xCenter = 0
  yCenter = 0
  size = 0
  lines = []
  tick = 0

  step(i) {
    const base = (this.lines[i].offset + this.tick) / 60
    this.lines[i].p1.x += Math.cos(base) * (this.size / 250)
    this.lines[i].p2.x += Math.sin(base) * (this.size / 250)
    this.lines[i].p3.x += Math.cos(base) * (this.size / 250)
    this.lines[i].p4.x += Math.sin(base) * (this.size / 250)
    this.lines[i].p2.y = this.yCenter + (Math.cos(base) * this.size) / 1
    this.lines[i].p3.y = this.yCenter + (Math.sin(base) * this.size) / 1
  }

  draw(i) {
    this.ctx.beginPath()
    this.ctx.moveTo(this.lines[i].p1.x, this.lines[i].p1.y)
    this.ctx.bezierCurveTo(
      this.lines[i].p2.x,
      this.lines[i].p2.y,
      this.lines[i].p3.x,
      this.lines[i].p3.y,
      this.lines[i].p4.x,
      this.lines[i].p4.y
    )
    const alpha =
      0.55 + Math.sin((this.lines[i].offset + this.tick) / 20) * 0.45
    if (i % 2 === 0) {
      this.ctx.strokeStyle =
        'hsla(' + (i / 10) * 360 + ', 100%, 85%, ' + alpha + ')'
    } else {
      this.ctx.strokeStyle = 'hsla(0, 0%, 100%, ' + alpha + ')'
    }
    this.ctx.stroke()
  }

  init = () => {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.lines = []
    this.reset()
    this.loop()
  }

  reset = () => {
    this.width = document.documentElement.clientWidth
    this.height = document.documentElement.clientHeight
    this.xCenter = this.width / 2
    this.yCenter = this.height / 2
    this.size = Math.min(this.width, this.height) * 0.5
    this.lines.length = 0
    this.tick = 0
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx.lineWidth = 2
    for (let i = 0; i < 20; i++) {
      this.lines.push(new Line(i * 6, this.yCenter, this.size))
    }
  }

  loop = () => {
    requestAnimationFrame(this.loop)
    let i = this.lines.length
    while (i--) {
      this.step(i)
    }
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.ctx.save()
    this.ctx.translate(this.xCenter, this.yCenter)
    this.ctx.rotate(this.tick / 200)
    this.ctx.translate(-this.xCenter, -this.yCenter)
    this.ctx.translate((this.width - this.size) / 2, 0)
    i = this.lines.length
    while (i--) {
      this.draw(i)
    }
    this.ctx.restore()
    this.tick++
  }
}
