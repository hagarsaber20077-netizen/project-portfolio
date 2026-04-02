function darkMode(){
    let btn = document.getElementById("btn-dark");

    document.documentElement.classList.toggle("dark");

    if(document.documentElement.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        btn.innerText = "Light Mode";
    } else {
        localStorage.setItem("theme","light");
        btn.innerText = "Dark Mode";
    }
}

window.onload = function(){
    let btn = document.getElementById("btn-dark");

    if(!btn) return;

    if(localStorage.getItem("theme") === "dark"){
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
}


// validation
function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorname = document.getElementById("errorname");
    let erroremail = document.getElementById("erroremail");
    let errormessage = document.getElementById("errormessage");
    errorname.innerText = "";
    erroremail.innerText = "";
    errormessage.innerText = "";

    if(name === ""){
        errorname.innerText = "Please enter your name";
    }
    if(email === ""){
          erroremail.innerText = "Please enter your email";    
    }
    if (!email.includes("@") && !email.includes(".")){
          erroremail.innerText = "Please enter your email";    
    }
    if(message === ""){
        errormessage.innerText = "Please enter your message";
    }
    if(message.length <= 3){
         errormessage.innerText = "Message must be more than 3 characters";
    }
}

