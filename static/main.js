
$(document).ready(function(){


var canvas
var ctx

function initialize_canvas(){

    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    ctx = canvas.getContext("2d");

}

function clear_canvas(room_json) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEF0DB"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


initialize_canvas()
clear_canvas()
ctx.translate(300,300);


function rotate(rotation){
    ctx.rotate(rotation*Math.PI/180);
}

function draw_line(size){

    ctx.moveTo(0,0)
    ctx.lineTo(size,0)
    ctx.stroke();
    ctx.translate(size,0);

}



function koch(order, size){

    if (order==0){
        draw_line(size)
    }
    else {

        // angle = [0, -60, 120, -60]

        // for (i = 0; i < angle.length; i++) { 
        //     console.log(i)
        //     // console.log(order-1)
        //     rotate(angle[i])
        //     koch(order-1, size/3)
            
        // }  

        rotate(0)
        koch(order-1, size/3)

        rotate(-60)
        koch(order-1, size/3)

        rotate(120)
        koch(order-1, size/3)

        rotate(-60)
        koch(order-1, size/3)

    }

}

function koch_star(order, size){
    koch(order, size)
    rotate(120)
    koch(order, size)
    rotate(120)
    koch(order, size)
}


koch_star(5, 300)
// koch(2,300)


});