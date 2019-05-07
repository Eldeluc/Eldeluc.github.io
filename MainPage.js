window.onload = populateMainPage;
function populateMainPage(){
    document.getElementById("mainMenu").innerHTML = "Black Diamond Labs";
    var username = "\0"
    var password = "\0"
    
    alert("Welcome to Black Diamond Labs")
    if(confirm("Click 'OK' if you are a registered user.")){
        alert("If you say so.")
    }
    else{
        alert("We will have to get you registered.")
        username = prompt("Username: ","")
        password = prompt("Password: ","")

        if((username == "Eldeluc")&&(password == "P13@$3")) {
            alert("Sign-In Successful ~ Eldeluc")
        }
    }

}