function get_email(){
    
    var email = document.getElementById("emaill").value
    if (email){
        console.log(email)
        return email}
    else {
        console.log("null")
    }
    
}
function charger(){
    
    var annee = document.getElementById("an")
    var email = prompt("email") 
    console.log(email)
    let datee = new Date()
    annee.innerHTML = datee.getFullYear()
    document.getElementById("ps").innerHTML = email.substring(0,2).toUpperCase() + email.substring(email.indexOf("."),email.indexOf(".")+2) + email.charCodeAt(0) + String.fromCharCode(Math.round(Math.random()*25)+65) + "_" + email.substring(0,email.indexOf(".")).length + email.substring(email.indexOf("@")+1,email.indexOf("@")+2)
    console.log(email)
}

function lecture(){
    document.getElementById("vid").style.border = "solid 5px green "
    alert("Video en cours de lecture")
}
function PauseVideo(){
    document.getElementById("vid").style.border = "solid 5px red "
    alert("Video en pause")
}


function changer_image(){

}