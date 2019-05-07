window.onload = nameFieldInit;

function populateMainPage(){
    document.getElementById("mainMenu").innerHTML = "Black Diamond Labs";
    var username = "\0"
    var password = "\0"
    
    alert("Welcome to Black Diamond Labs")
    if(confirm("Click 'OK' if you are a registered user.")){
        alert("If you say so.")

        alert("Section in progress.")
    }
    else{
        alert("We will have to get you registered.")
        username = prompt("Username: ","")
        password = prompt("Password: ","")

        if((username == "Eldeluc")&&(password == "P13@$3")) {
            alert("Sign-In Successful ~ Eldeluc")
            populateUserID()
        }
    }

}

function nameFieldInit() {
    var userName = "";

    if(document.cookie != "") {
        userName = document.cookie.split("=")[1]
    }

    document,getElementById("nameField").value = userName;
    document.getElementById("NameField").onblur = setCookie;
}

function setCookie() {
    var expireDate = new Date();
    expireDate.setMonth(expireDate.getMonth()+6);

    var userName = document.getElementById("nameField").value;
    document.cookie = "userName=" + userName + ";expires=" + expireDate.toGMTString();
}