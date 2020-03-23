document.getElementById("searchBtn").addEventListener("click", getData);

function getData() {
    //Step 1: initialize a New XHR object
    var xhrObj = new XMLHttpRequest();
   // console.log(xhrObj);
    //Step 2: xhr.open(requestType, URL, asyncBool)
    xhrObj.open('POST', 'http://localhost:3000/sn-users', true);

    // Step 3: Wait for transfer to load. 
    xhrObj.onload = function () {

        if (xhrObj.status == 200) {
            // console.log(xhrObj.responseText);

            // step 5: convert text data to JSON
            var parsedData = JSON.parse(xhrObj.responseText); 
            console.log(parsedData);

            }

    }
    // Step: 4
    xhrObj.send();
}