class Mango {

constructor (x,y,radius){

var options = {
isStatic : true,
restitution : 0,
friction : 1
}
Mangoimg = loadImage("mango.png")
this.body = Bodies.circle(300,300)
World.add(world,this.body)
}

display(){
mangopos = this.body.position
push()
imageMode(CENTER)
image(Mangoimg, mangopos.x, mangopos.y)
pop()
}



























}