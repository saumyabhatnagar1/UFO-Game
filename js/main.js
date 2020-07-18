const canvas=document.getElementById('ufoCanvas')
canvas.width=900;
canvas.height=550;
const ctx=canvas.getContext('2d')

function resize(){
    const height=window.innerHeight-20;
    const ratio=canvas.width/canvas.height
    const width=height*ratio;
    canvas.style.height=height +'px'
    canvas.style.width=width +'px'

}
window.addEventListener('load',resize,false)

function Gamebasics(canvas){
    this.canvas=canvas;
    this.height=canvas.height
    this.width=canvas.width

    this.playgroundBound={
        top:150,
        bottom:650,
        left:100,
        rigth:800
    }
    this.setting={
        updateSeconds:(1/60)
    }
    this.positionContainer=[]
    
}

Gamebasics.prototype.presentPosition=function(){
    return this.positionContainer.length>0?this.positionContainer[this.positionContainer.length-1]:null
}

Gamebasics.prototype.goToPostion=function(){
    if(this.presentPosition()){
        this.positionContainer.length=0
    }
    if(position.entry){
        position.entry(play)
    }
    this.positionContainer.push(position)
}
   Gamebasics.prototype.pushPositon=function(position){
       this.positionContainer.push(position)
   }
   Gamebasics.prototype.popPosition=function(){
       this.positionContainer.pop()
   }

Gamebasics.prototype.start=function(){
    setInterval(function(){ gameloop(play)}, this.setting.updateSeconds*1000)
    this.goToPostion(new OpeningPosition())
}
const play= new Gamebasics(canvas)
play.start()

function gameloop(play){
 let presentPosition=play.presentPosition;
 if(presentPosition){
     
    if(presentPosition.update){
        presentPosition.update(play)
    }
    if(presentPosition.draw){
        presentPosition.draw(play)
    }
 }
}
