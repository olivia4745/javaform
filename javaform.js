let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form")

errorMsg = document.getElementsByClassName("error");  //selects all divs with the class name "error" and stores in array
successIcon = document.getElementsByClassName("success-icon");
failureIcon = document.getElementsByClassName("failure-icon");

function engine(id, serial, message) {               //function created to prevent unnecessary repitition  
    if (id.value.trim() === ""){                     //the .trim method prevents the user from entering whitespace as a value
        errorMsg[serial].innerHTML = message
        failureIcon[serial].style.opacity = "1"
        successIcon[serial].style.opacity = "0"
    } else {
        errorMsg[serial].innerHTML = ""
        successIcon[serial].style.opacity = "1"
        failureIcon[serial].style.opacity = "0"
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault()                              //the preventDefault method stops the error text from flickering away
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank") 

    //now you won't have to repeat the code in the engine function 3 times
})