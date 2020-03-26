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

const updateData = () => {
    
<<<<<<< HEAD
    sendHttpRequest('PATCH', 'http://localhost:3000/sn-users/'+'Nick+Smith', {
=======
    sendHttpRequest('PATCH', 'http://localhost:3000/sn-users/'+getName, true, {
>>>>>>> profile_page_v1.0
        
        name: document.getElementById("changingName").value,
        username: document.getElementById("changingUsername").value,
        email: document.getElementById("changingEmail").value,
        image: document.getElementById("changingPhoto").value,
        country: document.getElementById("changingCountry").value,

    }).then(responseData => {
        console.log(responseData);
<<<<<<< HEAD
        // console.log(getName);
=======
        console.log(getName.name);
>>>>>>> profile_page_v1.0
    })
    .catch(err => {
        console.log(err);
    })
};

updateBtn.addEventListener('click', updateData);
// getBtn.addEventListener('click', getUserData);