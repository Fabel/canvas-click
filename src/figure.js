var Figure = (function(){

  var Figure = function(x,y, width, height, centerX, centerY, color){
    if(typeof centerX == 'undefined'){
      centerX = width/2
      centerY = height/2
    }
    this.center = {x: centerX, y: centerY}
    this.coord = {x: x, y: y}
    this.box = {w: width, h: height}
    this.color = color || "black"

    this.minX = this.coord.x - this.center.x
    this.minY = this.coord.y - this.center.y
    this.maxX = this.minX + this.box.w
    this.maxY = this.minY + this.box.h
  }

  Figure.prototype = new function() {
    this.draw = function(){
      var posX = this.coord.x - this.center.x
      var posY = this.coord.y - this.center.y
      ctx.fillStyle = this.color
      ctx.fillRect(posX, posY, this.box.w, this.box.h)
      ctx.fill()
      return this
    }

    this.clickEvent = function(callback){
      this.clickCallback = callback
    }

    this.click = function(){
      if(this.clickCallback)
        this.clickCallback.call(this)
    }

    this.hit = function(x,y){
      if(this.minX <= x && this.minY <= y && this.maxX >= x && this.maxY >= y )
        return true
      else
        return false
    }
  }

  return Figure
})()
