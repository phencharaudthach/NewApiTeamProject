if ('geolocation' in navigator) {
    console.log('geolocation avaliable');
    navigator.geolocation.getCurrentPosition(position => { 
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const key = "AIzaSyBVf5JcNURCuR7v5vHmUI87AIB_UuD2qFs";
        console.log(position.coords.latitude); 
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    
    .catch(error => console.log(error));
});
} else {
        console.log('geolocation not available');
    }