function charger(){
    
    var annee = document.getElementById("an")
    var email = prompt("email") 
    console.log(email)
    let datee = new Date()
    annee.innerHTML = datee.getFullYear()
    document.getElementById("ps").innerHTML = email.substring(0,2).toUpperCase() + email.substring(email.indexOf(".")+1,email.indexOf(".")+3) + email.charCodeAt(0) + String.fromCharCode(Math.round(Math.random()*25)+65) + "_" + email.substring(0,email.indexOf(".")).length + email.substring(email.indexOf("@")+1,email.indexOf("@")+2)
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
    let select_element = document.getElementsByName("tab")[0]
    let in_body = document.getElementById('in_body')

    if (select_element.selectedIndex == 1){
        in_body.style.backgroundImage = "url('empreinte.jpg')"
        in_body.style.backgroundRepeat = 'no-repeat'
    }
    else if (select_element.selectedIndex == 2){
        in_body.style.backgroundImage = "url('faciale.jpg')"
        in_body.style.backgroundRepeat = 'no-repeat'
    }
    else if (select_element.selectedIndex == 3){
        in_body.style.backgroundImage = "url('codepin.jpg')"
        in_body.style.backgroundRepeat = 'no-repeat'
    }
}

function afficher(){
    document.getElementById("out").innerHTML = document.getElementById("range").value
}

function calculer(){
    let select_element = document.getElementsByName("tab")[0]
    let tab = document.getElementsByName("a")
    let total = document.getElementById("total")
    console.log(document.getElementsByName("tab")[1].value)
   
        if (select_element.selectedIndex == 1){
           total.value = Number(document.getElementsByName("tab")[1].value) + Number(tab[selectedIndex].value)

        }
        else if (select_element.selectedIndex == 2){
           total.value = Number(document.getElementsByName("tab")[2].value) + Number(tab[selectedIndex].value)

        }
        else if (select_element.selectedIndex == 3){
           total.value = Number(document.getElementsByName("tab")[3].value) + Number(tab[selectedIndex].value)
           console.log(tab[i].value)

        }
    }
   

    





