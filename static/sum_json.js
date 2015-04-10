var total = 0
function sum_json(json){

        for(var key in json){
            if (json[key].constructor === Array){
                sum_json(json[key])
            }
            else if (json[key].constructor === Object){
                sum_json(json[key])
            }
            else {
                total += json[key];
            }
        }

    return total
    
}

