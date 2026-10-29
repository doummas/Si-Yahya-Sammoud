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
    document.getElementById("out").innerHTML = t1[Math.round(Math.random()*5)]
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
    document.getElementById("out").innerHTML = t1[Math.round(Math.random()*20)]
}
    
