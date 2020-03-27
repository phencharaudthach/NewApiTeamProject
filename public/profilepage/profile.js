function tabs(evt, tabName) {
  // Declare all variables
  var i, profiletab, tablinks;

  // Get all elements with class="tabcontent" and hide them
  profiletab = document.getElementsByClassName("profiletab");
  for (i = 0; i < profiletab.length; i++) {
    profiletab[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function getData() {
    //Step 1: initialize a New XHR object
    var xhrObj = new XMLHttpRequest();
   // console.log(xhrObj);

    //Step 2: xhr.open(requestType, URL, asyncBool)
    xhrObj.open('GET', 'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=0347c2b176094a9d97c532469f456baa', true);

    // Step 3: Wait for transfer to load. 
    xhrObj.onload = function () {

        if (xhrObj.status == 200) {
            // console.log(xhrObj.responseText);

            // step 5: convert text data to JSON
            var parsedData = JSON.parse(xhrObj.responseText); 
            console.log(parsedData);

            let list = '';
            for (var i=0;i < parsedData.articles.length; i++){
                list += "<br> <h4>"+[i+1]+"</h4>" + 
                '<div id="borderline"> <br><p><img src="' +parsedData.articles[i].urlToImage+'"></p>'+
                '<p><a href="' +parsedData.articles[i].url+'">Click To Read Article</a></p>'+
                '<label> Article Name: </label>' +parsedData.articles[i].source.name+ 
                '<label> Author: </label> '+parsedData.articles[i].author+'</p>'+
                '<label>Title: </label>' +parsedData.articles[i].title+'</p>'+
                '<label>Description: </label>' +parsedData.articles[i].description+'</p>'+
                '<label>Published At: </label>' +parsedData.articles[i].publishedAt+'</p>'+
                '<label>Content: </label>' +parsedData.articles[i].content+'</p> </div>';
            }
            console.log(list);
            document.getElementById('text').innerHTML = list;

            }

    }
    // Step: 4
    xhrObj.send();
}

//READ One
function getOneByUsername() {
  event.preventDefault();
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var input = queryString.slice(1);
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/sn-users/" + input, true);

  xhr.onload = function() {
    var user = JSON.parse(xhr.responseText);
    // var user = JSON.stringify(xhr.responseText);
    userName= user.name;
    userImage = user.image;

    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log(user);
      document.getElementById("testName").innerHTML = userName;
      document.getElementById("userImage").src = userImage;
      console.log(user.image)
    } else {
      document.getElementById("testName").innerHTML = "<i>user not found</i>";
      console.error(user);
    }
  };

  xhr.send(null);
}

function startClock(){
    getOneByUsername();
}
if(window.addEventListener) {
    window.addEventListener('load',startClock,false); //W3C
} else {
    window.attachEvent('onload',startClock); //IE
}

document.getElementById("listButton").addEventListener("click", getData);
