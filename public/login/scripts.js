const axios = require('axios');

async function getStudentProfiles(){
    let data = axios.get('/graduate_profiles/students')
        .then(response =>{
            console.log(response);
        })

    return data;
}