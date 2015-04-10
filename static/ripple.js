
var c = 0
var random_param = 2
// var alpha
function recursive_circle(x,y,size,org_size){
	

	if (size<=0.1*org_size){
		c = 0
		// return alpha
	}
	else {
		c = c + 1

		color = "#3370d4"

		size = size*0.7
		alpha = draw_circle_with_alpha(x,y,size,color)
		recursive_circle(x,y,size,org_size)



	}	

return alpha

}

