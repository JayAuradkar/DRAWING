var mouseEvent = ""
var lastPositionOfX = ""
var lastPositionOfY = ""
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
canvas.addEventListener("mousedown",myMouseDown)
function myMouseDown(e){
    mouseEvent = "mousedown"
}
canvas.addEventListener("mouseup",myMouseUp)
function myMouseUp(e){
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave",myMouseLeave)
function myMouseLeave(e){
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove",myMouseMove)
function myMouseMove(e){
     currentPositionOfX = e.clientX - canvas.offsetLeft
     currentPositionOfY = e.clientY - canvas.offsetTop
       if(mouseEvent=="mousedown"){
           ctx.beginPath()
           ctx.strokeStyle = "Black"
           ctx.lineWidth = 2
             ctx.moveTo(lastPositionOfX,lastPositionOfY)
             ctx.lineTo(currentPositionOfX,currentPositionOfY)
             ctx.stroke()
        }
        lastPositionOfX = currentPositionOfX
        lastPositionOfY = currentPositionOfY
}
    function clear()
    {
        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
