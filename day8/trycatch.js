function fetchData() {

    return new Promise(function(resolve, reject) {

        let success = true;

        setTimeout(function() {

            if (success) {
                resolve("Data Loaded");
            }
            else {
                reject("Failed to Load Data");
            }

        }, 2000);

    });

}

async function displayData() {

    try {

        console.log("Loading...");

        let result = await fetchData();

        console.log(result);

    }
    catch(error) {

        console.log(error);

    }

}

displayData();