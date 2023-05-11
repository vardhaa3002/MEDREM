const form = document.getElementById('first-form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('usernames').value;
    const password = document.getElementById('passwords').value;

    const USER  = localStorage.getItem('username');
    const PASS  = localStorage.getItem('password');

    if(USER === username && PASS === password){
        window.location.href ="file:///C:/Users/dhinesh/login3.html";
    }
    else{
        alert("login credentials doesn't match");
    }
    

})