document.getElementById("searchBtn").addEventListener("click", getData);

function getData() {
    //Step 1: initialize a New XHR object
    var xhrObj = new XMLHttpRequest();
   // console.log(xhrObj);
    var keyWord = document.getElementById('searchWrd').value;
    //Step 2: xhr.open(requestType, URL, asyncBool)
    xhrObj.open('GET', 'http://newsapi.org/v2/everything?' +
    'q='+keyWord+'&' +
    'from=2020-03-17&' +
    'sortBy=popularity&' +
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
                '<p> Article Name: ' +parsedData.articles[i].source.name+ '</p>'+
                '<p> Author: '+parsedData.articles[i].author+'</p>'+
                '<p>Title: ' +parsedData.articles[i].title+'</p>'+
                '<p>Description: ' +parsedData.articles[i].description+'</p>'+
                '<p>URL: <a href="' +parsedData.articles[i].url+'">Click To Read</a></p>'+
                '<p>URL Image: <img src="' +parsedData.articles[i].urlToImage+'"></p>'+
                '<p>Published At: ' +parsedData.articles[i].publishedAt+'</p>'+
                '<p>Content: ' +parsedData.articles[i].content+'</p>';
            }
            console.log(list);
            document.getElementById('searchedResults').innerHTML = list;
            
            }

    }
    // Step: 4
    xhrObj.send();
}