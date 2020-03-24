<<<<<<< HEAD
=======

>>>>>>> master
function loginPage() {
    var fullName = document.getElementById("fullname".value);
    var userName = document.getElementById("unqiueName".value);
    var userEmail = document.getElementById("userEmail".value);
    var userPassword= document.getElementById("userPassword".value);
    var form = document.getElementById("criticalInfo");
    var errorElement = document.getElementById('error')

    form.addEventListener('submit', (e) => {
        let messages = []
        if (fullName === '' || fullName == null) {
            messages,push('Name is required')
        }

        if (userPassword.length <=6) {
            messages.push('Password must be longer than 6 characters')
        }

        if (userPassword === 'password') {
            messages.push('password cannotbe password')
        }

        if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

        
   
    }
})
}

document.getElementById("signUp").onclick = function() {
    loginPage();   
<<<<<<< HEAD
  };            
=======
  };            
>>>>>>> master
