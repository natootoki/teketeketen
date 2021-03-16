let canvas = document.getElementById('stage');
let ctx = canvas.getContext('2d');

let x=[];
let y=[];
let num=5000;
for(i=0;i<num;i++){
    x.push(0)
    y.push(0)
}

let min=1;
let max=4;
let a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

document.body.style.overflow = "hidden";

const loop = () => {
    for(i=0;i<num;i++){
        a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        if(a===1){
            x[i]+=1;
        }else if(a===2){
            x[i]-=1;
        }else if(a===3){
            y[i]+=1;
        }else if(a===4){
            y[i]-=1;
    }
}
    
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.fillStyle="#FCD7A1";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

    ctx.fillStyle="#000000";
    for(i=0;i<num;i++){
        ctx.beginPath();
        ctx.arc(window.innerWidth/2+x[i],window.innerHeight/2+y[i], 2, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
        ctx.fill() ;
    }
    window.requestAnimationFrame(loop);
}

loop();
