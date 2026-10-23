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


function genererCaptch(){
    let tab = ["BONJOUR","CLAVIER","ORDINATEUR","PROGRAMME","INFORMATIQUE","ALGORYTHME","JAVASCRIPT"]
    let al = Math.round(1+Math.random()*4)
    let out= document.getElementById("captcha")
    let c=tab[Math.round(Math.random)*7]

}