var $ = window

var ctx = null

document.addEventListener('DOMContentLoaded', function(){
  ctx = canvas.getContext('2d')
  var objects = []
  a = new Figure(0,0,50,50, 0, 0, "red")
  b = new Figure(0,0,50,50, -30, -30, "green")
  c = new Figure(0,0,50,50, -40, -10, "blue")
  objects.push(a)
  objects.push(b)
  objects.push(c)

  a.clickEvent(function(event){
    console.log('click A')
  })
  b.clickEvent(function(event){
    console.log('click B')
  })
  c.clickEvent(function(event){
    console.log('click C')
  })

  canvas.addEventListener('click', function(event){
    for(var i=0; i<objects.length; i++){
      if(objects[i].hit(event.clientX, event.clientY))
        objects[i].click()
    }
    console.log(event.clientX, event.clientY)
  })

  a.draw()
  b.draw()
  c.draw()

})
