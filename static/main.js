var canvas
var ctx


function initialize_canvas(){

    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    ctx = canvas.getContext("2d");

}


function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#7BBF6A"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function rotate(rotation){
    ctx.rotate(rotation*Math.PI/180);
}


function draw_line(size){

    ctx.strokeStyle = '#FF3030';
    ctx.moveTo(0,0)
    ctx.lineTo(size,0)
    ctx.stroke();
    ctx.translate(size,0);

}


function draw_circle_with_alpha(x,y,radius,color){

    ctx.save();
    ctx.globalAlpha = Math.pow(0.97,0.5*radius);
    draw_circle(x,y,radius,color)
    ctx.restore();

}





function draw_circle(x,y,radius,color){

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI,false);
    ctx.arc(x,y,radius*0.9,0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();

}




$(document).ready(function(){

    initialize_canvas()
    clear_canvas()


    // draw_circle(200,200,50)
    // draw_circle(200,200,55,"#FF3030")

    // ctx.translate(100,300);
    // koch_star(3, 300)


    // json = [1,1,[2,2],1, [3], {"a":[1,{"a":[3,1]}],"b":2}, 1]
    // total = sum_json(json)
    // console.log(total)


    var multiplier = 0
    function sleep_loop(x,y){

        clear_canvas()
        recursive_circle(x,y,1+multiplier,1+multiplier)
        multiplier = multiplier + 2
        setTimeout(function() {sleep_loop(x,y);}, 40)

    }

    
    sleep_loop(200,200)
    // sleep_loop(700,350)

});