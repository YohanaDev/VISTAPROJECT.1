const app = document.getElementById("typewriter")
;
const typewriter = new typewriter(app,{
loop:true,
delay:75

});
typewriter
.typestring( ´Hacemos posible´)
.pauseFor(200)
.start();