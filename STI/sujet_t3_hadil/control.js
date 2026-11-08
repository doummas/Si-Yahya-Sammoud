function affdate(){
    let dt = new Date()
    document.getElementById("out").innerHTML = dt.getDate() +"/" + dt.getMonth() +"/" + dt.getFullYear()
    console.log( dt)
}
function valider(){
    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("pre").value
    if (!lettre(nom)){
        alert("nom invalid")
        return false
    }
    if (!lettre(prenom)){
        alert("prenom invalid")
        return false
    }
    let pass = document.getElementById("pass").value
    if ((pass[0]<"A" && pass[0]>"Z") || !lettre(pass)){
        alert("Password incorrect")
        return false
    }
    let repass = document.getElementById("repass").value
    if (repass!=pass){
        alert("pass!=repass")
        return false
    }
    let email = document.getElementById("email").value
    if (email.indexOf("@")==-1 || email.indexOf(".")==-1){
        alert("email invalide")
        return false
    }

    let se = document.getElementById("se").selectedIndex
    if(se ==-1 ||se == 0){
        alert("select")
        return false
    }


}

function lettre(ch){
    let i=0
     ch = ch.toUpperCase()
    while (i<ch.length && (ch[i]>="A" && ch[i]<="Z")){
        i++
    
    }
    return i==ch.length

}