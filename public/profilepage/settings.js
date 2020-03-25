const updateBtn = document.getElementById('update-Btn');
// const getBtn = document.getElementById('testButton');

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
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

var getName = document.getElementById("testName").value;

// const getUserData = () => {
//     sendHttpRequest('GET', 'http://localhost:3000/sn-users/'+getName).then(responseData => {
//         // var parsedData = JSON.parse(responseData);
//         // console.log(responseData);
                    
//                     console.log(responseData.name);
//                     // document.getElementById('testName').innerHTML = responseData[0].username;
//     });
// };

const updateData = () => {
    
    sendHttpRequest('PATCH', 'http://localhost:3000/sn-users/', {
        
        name: document.getElementById("changingName").value,
        username: document.getElementById("changingUsername").value,
        email: document.getElementById("changingEmail").value,
        image: document.getElementById("changingPhoto").value,
        country: document.getElementById("changingCountry").value,

    }).then(responseData => {
        console.log(responseData);
        console.log(getName);
    })
    .catch(err => {
        console.log(err);
    })
};

updateBtn.addEventListener('click', updateData);
// getBtn.addEventListener('click', getUserData);