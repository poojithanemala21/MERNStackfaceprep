function task(name,time){

    return new Promise(function(resolve){

        setTimeout(function(){

            console.log(name);

            resolve();

        },time);

    });

}

task("Step 1",1000)

.then(function(){

    return task("Step 2",1000);

})

.then(function(){

    return task("Step 3",1000);

})

.then(function(){

    return task("Step 4",1000);

});