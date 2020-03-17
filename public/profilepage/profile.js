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

  document.getElementById("button").addEventListener("click", getData);

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

              for (var i=0;i < parsedData.length; i++){

              }
              document.getElementById("sourcename").innerText = "Source Name "+ parsedData.articles[0].source.name;
              document.getElementById("author").innerText = "Author " + parsedData.articles[0].author;
              document.getElementById("title").innerText = "title " + parsedData.articles[0].title;
              document.getElementById("description").innerText = "description " + parsedData.articles[0].description;
              document.getElementById("url").innerText = "url " + parsedData.articles[0].url;
              document.getElementById("urlToImage").innerText = "urlToImage " + parsedData.articles[0].urlToImage;
              document.getElementById("publishedAt").innerText = "publishedAt " + parsedData.articles[0].publishedAt;
              document.getElementById("content").innerText = "content " + parsedData.articles[0].content;

      }

      }
      // Step: 4
      xhrObj.send();
  }