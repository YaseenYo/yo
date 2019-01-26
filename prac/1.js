// JavaScript source code
function check() {
    var name = document.getElementById('name').value;
    var pasword = document.getElementById('pasword').value;

    if (name==="" && pasword === "") {
        alert("please enter your name and password");
    }
    else if (name === "") {
        alert("please enter your name");
    }
    else if (pasword === "") {
        alert("please enter your password");
    }
    else if (pasword.length <= 5) {
        alert("password should contain atleast 6 characters");
    }
    else {
        var next = window.location;
        next.href = "2.html";
        alert("welcome " + name);
    }
}







