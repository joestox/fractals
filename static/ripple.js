
var c = 0
var random_param = 2
function recursive_circle(x,y,size,org_size){
	
	// size = size*0.9
	if (size<=0.1*org_size){
		c = 0
		return 1
	}
	else {
		c = c + 1

		color = "#3370d4"

		size = size*0.7// + (Math.sin(size)+1)*sin_multiplier
		draw_circle_with_alpha(x,y,size,color)
		recursive_circle(x,y,size,org_size)


		// each frame, the size is increased and the fractal redraws slight larger
		// we need the fractal to only draw down to a certain percentage of size


	}	


}

