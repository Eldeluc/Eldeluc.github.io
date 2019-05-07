window.onload = populateMainPage;
function populateMainPage(){
    document.getElementById("mainMenu").innerHTML = "Black Diamond Labs";
    
    alert("Welcome to Black Diamond Labs")
    if(confirm("Are you a registered user?")){
        alert("If you say so.")
    }
    else{
        alert("We will have to get you registered.")
    }

}