function verif1(){
    let user = document.getElementById("user").value
    if (user=="" || (user.length > 101 || user.length<5) || user.indexOf(" ")!=-1 || (user[0]>="0" && user[0]<"9") || !chiffre(user) || (user=="admin2026" || user=="root123") ){
        alert("user faux")
        return false
    }



}

function chiffre(ch){
    i=0
    f=0
    while (i<ch.length && (ch[i]>="A" && ch[i]<="Z")){
        i++
        if (ch[i]<="0" || ch[i]>="9"){
            f+=1
        }
    }
    return f!=0
}

function generer(){
    t1=[]
    t2=[]
    let t3 = ["*","+","-"]
    for (let i=0 ;i<5;i++){
        t1[i] = String(Math.round(Math.random()*20)) + t3[Math.round(Math.random()*2)] + String(Math.round(Math.random()*20))
        if (t1[i].indexOf("*")!=-1){
            t2[i]=Number(t1[i].substring(0,t1[i].indexOf("*"))) * Number(t1[i].substring(t1[i].indexOf("*")+1))
        }
        else if (t1[i].indexOf("-")!=-1){
            t2[i]=Number(t1[i].substring(0,t1[i].indexOf("-"))) - Number(t1[i].substring(t1[i].indexOf("-")+1))
        }
        else if (t1[i].indexOf("+")!=-1){
            t2[i]=Number(t1[i].substring(0,t1[i].indexOf("+"))) + Number(t1[i].substring(t1[i].indexOf("+")+1))
        }
    }
    console.log(t1)
    console.log(t2)
    document.getElementById("out").innerHTML = t1[Math.round(Math.random()*4)]
}
function verifier(){
    let out = document.getElementById("out").innerHTML
    let i = t1.indexOf(out)
    if (t2[i] != document.getElementById("result").value ){
        alert("captcha incorrect")
    }
    console.log(i)
    console.log(out)
    console.log(t2[i])
    console.log(document.getElementById("result").value)
}

function refrech(){
    document.getElementById("out").innerHTML = t1[Math.round(Math.random()*4)]
}


function valider(){
    let cin = document.getElementById("codeClient").value
    if (cin.length!=8){
        alert("Cin Incorrect")
        return false
    }
    let equi = document.getElementById("equip")
    if (equi.selectedIndex == -1 || equi.selectedIndex == 0){
        alert("Select equipment")
        return false
    }
    
    let date = (document.getElementById("dateLoc").value)
    let date1 = new Date(date)
    console.log(date1)
    if (date1 == "" || (date <("2026-04-01") )){
        alert('Date incorrect')
        return false
    }
    let pai= document.getElementsByName("paiement")
    val = ""
    for (let i =0;i<2;i++){
        if(pai[i].checked){
            val = pai[i].value
        }
        
    }
    alert(val)
    if (val == ""){
        alert("Paiment incorrect")
        return false
    }
}
function alea(){
    
    let t=["parachute.jpg","pause.png","pedalo.jpg"]
    document.getElementById("im").src = t[Math.round(Math.random()*2)] 
    console.log(t[Math.round(Math.random()*2)] )




} 

function vall(){
    let pai= document.getElementsByName("paiement")
    val = ""
    for (let i =0;i<3;i++){
        if(pai[i].checked){
            val = pai[i].value
        }
        
    }
    console.log(val)
}

function playy(){
    promotion = true
    tota()
}

function pausee(){
    promotion = false
    tota()
}

function tota(){
    console.log(String(val*0.8))
    if (promotion){  
        document.getElementById('tot').innerHTML = String(val*0.8)
    }
    else{
        document.getElementById('tot').innerHTML = String(val)
    }

}
