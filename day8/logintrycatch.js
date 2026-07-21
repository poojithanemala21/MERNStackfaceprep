function login(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "admin" && password === "1234") {

                resolve("Login Successful");

            }
            else {

                reject("Invalid Username or Password");

            }

        }, 2000);

    });

}

async function userLogin() {

    try {

        let message = await login("admin", "1234");

        console.log(message);

    }
    catch(error) {

        console.log(error);

    }

}

userLogin();