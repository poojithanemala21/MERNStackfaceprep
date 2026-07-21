function calculate(a,b,operation){

    operation(a,b);

}

function add(x,y){

    console.log(x+y);

}

calculate(10,20,add);