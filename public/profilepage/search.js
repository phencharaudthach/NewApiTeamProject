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
            document.getElementById('searchedResults').innerHTML = list;
            
            }

    }
    // Step: 4
    xhrObj.send();
}