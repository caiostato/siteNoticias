function load(event) {
    event.preventDefault();

    let titles = new Array();
    let str = new Array();
    let count = 0;
    let x = document.getElementsByClassName('noticiaPrincipal');
    
    db.collection("noticias").get()
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

    let icon = document.querySelector('#icon'); //icon
    $('#a0').mouseenter(() => {
        icon.src = "./images/icon1.png"
    })
    $('#a0').mouseleave(() => {
        icon.src = "./images/icon1White.png"
    })

    let img1 = document.querySelector('#img1'); //politica
    $('#a1').mouseenter(() => {
        img1.src = "./images/politicaIcon.png"
    })
    $('#a1').mouseleave(() => {
        img1.src = "./images/politicaIconWhite.png"
    })

    let img2 = document.querySelector('#img2'); //saude
    $('#a2').mouseenter(() => {
        img2.src = "./images/saudeIcon.png"
    })
    $('#a2').mouseleave(() => {
        img2.src = "./images/saudeIconWhite.png"
    })

    let img3 = document.querySelector('#img3'); //educacao
    $('#a3').mouseenter(() => {
        img3.src = "./images/eduIcon.png"
    })
    $('#a3').mouseleave(() => {
        img3.src = "./images/eduIconWhite.png"
    })
    
    let img4 = document.querySelector('#img4'); // login
    $('#a4').mouseenter(() => {
        img4.src = "./images/login.png"
    })
    $('#a4').mouseleave(() => {
        img4.src = "./images/loginWhite.png"
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
