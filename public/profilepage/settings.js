const updateBtn = document.getElementById('update-Btn');
// const getBtn = document.getElementById('testButton');



//UPDATE
function updateUser() {
    event.preventDefault();
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var input = queryString.slice(1);
    var updatedUser = {
    name: document.getElementById("changingName").value,
    email:document.getElementById("changingEmail").value,
    username: document.getElementById("changingUsername").value,
    password: document.getElementById("changingPw").value,
    image: document.getElementById("changingPhoto").value,
    country: document.getElementById("changingCountry").value
    };
    var json = JSON.stringify(updatedUser);

    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://localhost:3000/sn-users/" + input, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
        var user = json;
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log(user);

        } else {
            console.error(user);
            alert("Did not update successfully");
        }
    };
    xhr.send(json);
}
function reload() {
    location.reload();
  }

updateBtn.addEventListener('click', ()=>{ updateUser(); alert("updated successfully"); reload()});

