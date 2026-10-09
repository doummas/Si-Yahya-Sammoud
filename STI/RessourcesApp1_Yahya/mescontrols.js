function charger(){
    var annee = document.getElementById("an")
    var email = prompt("email") 
    console.log(email)
    let datee = new Date()
    
    let month = datee.getMonth() + 1
    if (month < 10){
        month = "0" + month
    }
    else{
    annee.innerHTML = String(datee.getFullYear())+"/"+String(month)}
    document.getElementById("ps").innerHTML = email.substring(0,2).toUpperCase() + email.substring(email.indexOf(".")+1,email.indexOf(".")+3) + email.charCodeAt(0) + String.fromCharCode(Math.round(Math.random()*25)+65) + "_" + email.substring(0,email.indexOf(".")).length + email.substring(email.indexOf("@")+1,email.indexOf("@")+2)
    console.log(email)

    switch (annee){
        case 2026:
            document.getElementById("an").innerHTML = m+"-" + annee + "| date creation du site";break
        case 2027:
            document.getElementById("an").innerHTML = m+"-" + annee + "| premier annee";break
        default:
            document.getElementById("an").innerHTML = m+"-" + annee + "| Tous droits reserves"

    }
}

function lecture(){
    document.getElementById("vid").style.border = "solid 5px green "
    document.getElementById("lp").innerHTML = "video en cour"
    document.getElementById("lp").style.color = "green"
    document.getElementById("lp").style.textTransform = "capitalize"
}
function PauseVideo(){
    document.getElementById("vid").style.border = "solid 5px red "
    document.getElementById("lp").innerHTML = "video en pause"
    document.getElementById("lp").style.color = "red"
}


function changer_image(){
    let select = document.getElementById("select")
    if (select.value == "10"){
        document.getElementById('edi').hidden = false
        document.getElementById('cpi').hidden = true
        document.getElementById('rci').hidden = true
    }
    else if (select.value == "8"){
        document.getElementById('cpi').hidden = false
        document.getElementById('edi').hidden = true
        document.getElementById('rci').hidden = true

    }
    else if(select.value == "15"){
        document.getElementById('rci').hidden = false
        document.getElementById('edi').hidden = true
        document.getElementById('cpi').hidden = true


    }
    
}

function afficher(){
    document.getElementById("out").innerHTML = document.getElementById("range").value
}

function calculer(){
    let select = document.getElementById("select")
    let check = document.getElementsByName("a")
    let somme = Number(select.value)
    for (let i = 0;i<check.length;i++){
        if (check[i].checked){
            somme += Number(check[i].value)
        }
        

    }
    document.getElementById("total").value = somme
    }
function valider(){
    let cin = document.getElementById("cin").value
    if (cin.length != 8 || (cin.substring(0,2) != "01" && cin.substring(0,2) != "06" ) ){
        alert("Numero Cin Incorrect")
    }
    let nom = document.getElementById("nom").value
    nom = eliminer_esp(nom)
    document.getElementById("nom").value = eliminer_esp(nom)
    console.log(nom)
    
    if (!lettes(nom) || calculer_espace(nom) > 1){
        alert("Nom et Prenom sont Incorrect")
    }
    console.log(lettes(nom))
    let email = document.getElementById("emaill").value
    let ch1 = email.substring(0,email.indexOf("@"))
    let ch2 = email.substring(email.indexOf('@')+1,email.lastIndexOf("."))
    let ch3 = email.substring(email.lastIndexOf(".")+1,email.length) 
    console.log(ch1+ch2+ch3)
    if (email.length >20 || email.length<3 || !lettre(ch1)|| !lettre(ch2) || !lettre(ch3) || ch2!="gmail" && ch2!="yahoo") {
        alert("email est Incorrect")
    }


    let da = document.getElementById("d").value
    if (da<= "2008-09-13"){
        alert("Date est Incorrect")
    }
    if (document.getElementById("select").value == "Choisir un mode"){
        alert("select est vide")
    }
    if (document.getElementById("p").value == ""){
        alert("Profession est vide")
    }
    if(!document.getElementById("ff").checked && !document.getElementById("mm").checked ){
        alert("Choisir un genre")
    }
}
function lettre(ch){
    let i = 0
    while(i<ch.length && ((ch[i].toUpperCase()>="A" && ch[i].toUpperCase()<="Z"))){
        i++
    }
    return i==ch.length
}

function calculer_espace(nom){
    let s = 0
    let i =0
    while (i<nom.length){
        if(nom[i] == " "){
            s++
        }
        i++
    }
    return  s
}


function lettes(ch){
    let i = 0
    while(i<ch.length && ((ch[i].toUpperCase()>="A" && ch[i].toUpperCase()<="Z") || ch[i] == " ")){
        i++
    }
    return i==ch.length
}

function eliminer_esp(ch){
    ch=ch.trim()
    for(let i =0;i<ch.length-1;i++){
        if (ch[i]==ch[i+1] && ch[i] == " "){
            ch=ch.substring(0,i)+ch.substring(i+1,ch.length)
            i--
        }
    }
    return ch
}
   

    





