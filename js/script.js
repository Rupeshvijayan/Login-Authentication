const signUpForm = document.getElementById("addUser");

signUpForm.addEventListener("submit", handleRegistration);

function handleRegistration(event){
    event.preventDefault();

    const username = document.getElementById("addusername").value;
    const password = document.getElementById("addpassword").value;

    //retrieving existing data from localstorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //To check supplicate data
    let existingUser = users.find(function(user){
        user.username === username;
    })

    if(existingUser){
        alert("Username already exists. please choose a different username");   
    }else if(password.length < 8 || password.length > 16){
        alert("Password should be 8-16 characters long"); 
    }else{
        //{username:"aaa" , password:"123"}
        users.push({username: username, password: password});
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful !");
    }
    
}

const loginForm = document.getElementById("loginform");

loginForm.addEventListener("submit", handleLogin);

function handleLogin(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let authenticatedUser = users.find(function(user){
        return user.username === username && user.password === password
    })

    if(authenticatedUser){
        alert("login Successfull !");
    }else{
        alert("Invalid username or password");
    } 
}

const loginLink = document.getElementById("login-link");

loginLink.addEventListener("click",function(event){
    event.preventDefault();

    signUpForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

const signUpLink = document.getElementById("signup-link");

signUpLink.addEventListener("click",function(event){
    event.preventDefault();

    signUpForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
});


















