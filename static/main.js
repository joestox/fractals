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
    ctx.fillStyle = "#00B2EE"
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

    alpha = Math.pow(0.97,0.5*radius)

    ctx.save();
    ctx.globalAlpha = alpha;
    draw_circle(x,y,radius,color)
    ctx.restore();

    return alpha

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
    // koch(5,300)
    // koch_star(4, 300)


    // json = [1,1,[2,2],1, [3], {"a":[1,{"a":[3,1]}],"b":2}, 1]
    // total = sum_json(json)
    // console.log(total)

    li = [1]



    var multiplier = 0
    var x;
    var y;
    var ripple_list = []


    $("body").click(function(event){  

        x = event.pageX;
        y = event.pageY;
        ripple_list.push({"x":x,"y":y,"multiplier":1})

    })



    var remove_flag = 0
    function sleep_loop(){

        clear_canvas()

        for(var i in ripple_list){

            alpha = recursive_circle(ripple_list[i].x, ripple_list[i].y, 1+ripple_list[i].multiplier,1+ripple_list[i].multiplier)
            ripple_list[i].multiplier = ripple_list[i].multiplier + 2

            if (alpha < 0.015){
                remove_flag = 1
            }

        }

        if (remove_flag == 1){
            ripple_list = ripple_list.splice(1, 1);
            remove_flag = 0
        }

        setTimeout(function() {sleep_loop();}, 40)

    }

    sleep_loop()


});