function charger(){
    let choice = ["chien","chat"]
    document.getElementById("csp").innerHTML = choice[Math.round(Math.random())]
}



function verifConnexion(){
    let choiced = document.getElementById("csp").innerHTML
    let chat1 = document.getElementById("chat1").checked
    let chat2 = document.getElementById("chat2").checked
    let chat3 = document.getElementById("chat3").checked
    let chien1 = document.getElementById("chien1").checked
    let chien2 = document.getElementById("chien2").checked
    console.log(chien2)
    s=0
    switch (choiced){
        case "chat":
            if (chat1 && chat2 && chat3 && !chien1 && !chien2){
                return true
                break
                
            }
            else{
                alert("selection incorrect ressayez")
                return false
                break
            }

        case "chien":
            if (chien1 && chien2 && !chat1 && !chat2 && !chat3){
                return true
                break
                
            }
            else{
                alert("selection incorrect ressayez")
                return false
                break
            
    }
}}

function jourrestant(){
    let datee = new Date("2027/01/19") - new Date()
    let diff = Math.trunc(datee / (1000 * 60 * 60 * 24))
    if (diff>0){
    document.getElementById("index_p").innerHTML = "jour restant " + diff

    }
    else{
    document.getElementById("index_p").innerHTML = "delai depasse"
    }
    
}

function change(){
    document.getElementById("outt").innerHTML = document.getElementById("age").value
}
function genererCaptch(){
    
    let tab = ["BONJOUR","CLAVIER","ORDINATEUR","PROGRAMME","INFORMATIQUE","ALGORYTHME","JAVASCRIPT"]
    let k = Math.round(1+Math.random()*4)
    let mot=tab[Math.round(Math.random()*6)]
    let mot1 =""
    console.log(mot)
    for (let i=0;i<mot.length;i++){
        mot1+=String.fromCharCode((mot.charCodeAt(i)-65+k)%26+65)
    }
    document.getElementById("captcha").innerHTML = mot1
}


function verifInscrit(){
    let cin = document.getElementById("cin").value
    if (!chiffre(cin,"9","0")||cin.length!=16 || cin[0]==cin[cin.length-1] || !pair(cin)){
        alert("Cin invalid")
        return false
    }
    let tel = document.getElementById("tel").value
    if (!chiffre2(tel,"9","0") || tel[2]!= " " || tel[6]!=" " || String(tel).length!=10){
        alert("Numero de telephone est incorrect")
        return false
    }


    let ope = document.getElementById("ope").value.trim()
    if (ope=="" || (ope!="ooredoo" && ope!="telecom" && ope!="orange") ){
        alert("Operateur incorrect")
        return false
    }


    let age = document.getElementById("age").value
    if (age<18){
        alert("Age incorrect")
        return false
    }

    if (document.getElementById("rep").value != document.getElementById("captcha").innerHTML){
        alert("captcha invalid")
        return false
    }

    
    fin = Date.now()
    if(fin-dep>30000){
        alert('delai depasse');return false
    }
}



function temps(){
    dep =Date.now()
}

function chiffre(ch,c,cc){
    i=0
    ch=ch.toUpperCase()
    while (i<ch.length && (ch[i]>=cc && ch[i]<=c)){
        i+=1
    }
    return i==ch.length
}


function chiffre2(ch,c,cc){
    i=0
    ch=ch.toUpperCase()
    while (i<ch.length && ((ch[i]>=cc && ch[i]<=c) || ch[i]==" ")){
        i+=1
    }
    return i==ch.length
}
function pair(cin){
    let ch = String(cin)
    let p =""
    for (let i =0;i<ch.length;i++){
        if (Number(ch[i]%2)){
            p+=ch[i]
        }
    }
    return p>1
}