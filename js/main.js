const canvas=document.getElementById('ufoCanvas')
canvas.width=900;
canvas.height=550;

function resize(){
    const height=window.innerHeight-20;
    const ratio=canvas.width/canvas.height
    const width=height*ratio;
    canvas.style.height=height +'px'
    canvas.style.width=width +'px'

}
window.addEventListener('load',resize,false)
