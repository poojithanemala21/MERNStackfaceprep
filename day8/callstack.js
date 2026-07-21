function first(){
    console.log("First Function");
}

function second(){
    first();
    console.log("Second Function");
}

second();