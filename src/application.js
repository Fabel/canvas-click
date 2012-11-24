var $ = window

var ctx = null

var canvas = null

$.addEventListener('resize', function(){
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
})

document.addEventListener('DOMContentLoaded', function(){
  canvas = document.createElement('canvas')
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
  document.body.appendChild(canvas)

  ctx = canvas.getContext('2d')
  var objects = []
  a = new Figure(0,0,50,50, 0, 0, "red")
  b = new Figure(0,0,50,50, -30, -30, "green")
  c = new Figure(0,0,50,50, -40, -10, "blue")
  objects.push(a)
  objects.push(b)
  objects.push(c)

  var arr = [a, b, c]

  arr.forEach(function(e){
    e.clickEvent(function(){
      var c = Math.round(Math.random()*4048)
      if(c < 0xf)
        c = '00'+c.toString(16)
      else if(c < 0xff)
        c = '0'+c.toString(16)
      e.color = c.toString(16)
      console.log(e.color)
      console.log('click '+e.id)
    })
  })

  canvas.addEventListener('click', function(event){
    for(var i=0; i<objects.length; i++){
      if(objects[i].hit(event.clientX, event.clientY))
        objects[i].click()
    }
    console.log(event.clientX, event.clientY)
  })


  setInterval(draw, 30)
})

var draw = function(){
  var arr = [a, b, c]

  arr.forEach(function(e){
    e.draw()
  })
}
