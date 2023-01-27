
let hitcount= 0
let isgamestart= false
function startgame(){   
    hitcount= 0;
    isgamestart=true;
let mosquito = document.getElementById('mosquito'); 
let time = setInterval(()=>
{
    let i = Math.floor(Math.random()*500)+1;
    let j = Math.floor(Math.random()*500)+1;
    mosquito.style.left=i+"px"
    mosquito.style.top= j+"px"
},1200)

setTimeout(()=>
{
    clearTimeout(time)
    isgamestart= false
},30000)
}
function hitmosquito(){
    if(isgamestart)
    {
           hitcount++;
    document.getElementById('totalhit').innerText=hitcount;
    }
 
}
