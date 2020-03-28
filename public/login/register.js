const registerBtn = document.getElementById('signUp');
const loginBtn = document.getElementById('logIn');

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
            resolve(xhr.response);
            
            }
        };
        xhr.onerror = () => {
            reject('Something went wrong');
            alert("Something went wrong");
        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
};



const registerData = () => {
    
    sendHttpRequest('POST', 'http://localhost:3000/sn-users', {
        
        name: document.getElementById("fullName").value,
        username: document.getElementById("uniqueName").value,
        email: document.getElementById("userEmail").value,
        password: document.getElementById("userPassword").value

    }).then(responseData => {
        console.log(responseData);
    })
    .catch(err => {
        console.log(err);
      
    })
};



function loginData() {
    event.preventDefault();
    var user = {
      username: document.getElementById("usernameLogin").value,
      password: document.getElementById("passwordLogin").value,
    };
    var username = document.getElementById("usernameLogin").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/sn-users/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.send(JSON.stringify(user));
    xhr.onload = () => {
        if (xhr.status >= 400) {
            alert("Incorrect login, try again!")
        } else {
         console.log("works")
         var queryString = "?="+ username; 
         window.location.href = "http://localhost:3000/profilepage/profile.html"+queryString;
        }
    };

    xhr.onerror = () => {
        reject('Something went wrong');
    };

    xhr.send(JSON.stringify(user));
};

registerBtn.addEventListener('click', registerData);

loginBtn.addEventListener('click', () => {
    loginData();
});