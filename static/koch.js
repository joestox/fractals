
var angle = [0, -60, 120, -60]
function koch(order, size){

    angle_param = 0
    size_param = 0

    if (order==0){
        draw_line(size, ctx)
    }
    else {

        

            rotate(angle[0] + Math.random()*angle_param)
            koch(order-1, size/3 + Math.random()*size_param)

            rotate(angle[1] - Math.random()*angle_param)
            koch(order-1, size/3 + Math.random()*size_param)

            rotate(angle[2] + Math.random()*angle_param)
            koch(order-1, size/3 + Math.random()*size_param)

            rotate(angle[3] - Math.random()*angle_param)
            koch(order-1, size/3 + Math.random()*size_param)

    }
}



function koch_star(order, size){
    koch(order, size)
    rotate(120)
    koch(order, size)
    rotate(120)
    koch(order, size)
}
