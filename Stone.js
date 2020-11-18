class Stone {

constructor(x,y){

var options = {
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
}

this.image = loadImage("stone.png")
this.body = Bodies.circle(200,200)
World.add(world,this.body)
}

display(){
pos = this.body.position
push()
imageMode(CENTER)
image(this.image,pos.x,pos.y)
pop()
}
}