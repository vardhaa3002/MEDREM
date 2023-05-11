const form = document.getElementById('sform');
var check = true;


form.addEventListener('submit',function(event){
    event.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const cpass = document.getElementById('cpassword').value;

    if(pass != cpass){
        alert("password and confirm password does not match");
        check = fasle;
    }
    for(const char  of user){
        if(char == '@'){
            alert("invalid username");
            check = false;
        }
    }

    if(check){
        localStorage.setItem('username',user);
        localStorage.setItem('password',pass);
        window.location.href="file:///C:/Users/dhinesh/medicine%20recommendation2.html";
    }
    else{
        alert("enter the details correctly");
    }



})