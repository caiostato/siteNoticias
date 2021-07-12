function loadMain(event) {
    event.preventDefault();

    let titles = new Array();
    let str = new Array();
    let count = 0;
    let x = document.getElementsByClassName('noticiaPrincipal');
    
    db.collection("noticias")
        .where("type", "==", "educacao").get()
    .then((querySnapshot) => {
        // Leituta noticias
        querySnapshot.forEach((doc) => {
            
            str[count] = "background: url("+ doc.data().img+") center / cover no-repeat;";
            titles[count] = doc.data().titulo;
            
            count++;
        });
        
        // Sorteio de noticias
        for (let i = 0; i < x.length; i++) {
            let num = getRandomInt(0,str.length);

            // Uso DOM
            x[i].setAttribute("style",str[num]);
            document.getElementById("idNotTitle"+(i)).textContent = titles[num];
            
            str.splice(num,1);
            titles.splice(num,1);
        }
    })
    .catch((error) => {
        console.log(error);
    })
}

$(document).ready(function(){
    console.log("Biblioteca JQuery importada.");

    let boxIcon = document.querySelector('box-icon'); //icon
    $('box-icon').mouseenter(() => {
        boxIcon.style.color = 'black'
    })
    $('box-icon').mouseleave(() => {
        boxIcon.style.color = 'white'
    })
})

// Curtir noticias 
function like() {
    console.log("oi");
}

// Randomizacao
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
