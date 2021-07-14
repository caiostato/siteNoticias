function loadMain(event) {
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

function loggoffBtn(event) {
    event.preventDefault();

    let like = document.getElementById('notLike');
    let outBtn = document.getElementById('loggoff');
    let inBtn = document.getElementById('login');
    let user = localStorage.getItem('username');
    
    if(user != ''){
        outBtn.setAttribute('style','display: block;');
        inBtn.setAttribute('style','display: none;');    
        like.setAttribute('style','display: block;'); 
    }else {
    }
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

    $('#loggoff').click(() => {
        loggoff();
    })
})

// Curtir noticias 
function like(id) {
    let user = localStorage.getItem('username');

    console.log(user);

    if(user !== null){
        let notTitle = document.getElementById(id).textContent;
        
        db.collection("like").add({
            noticiaTitle:notTitle,
            user:user
        })
        .then(function(doRef){
            console.log("like registrado");
        })
        .catch(function(error){
            console.log(error);
        })		
    }
    else{
        alert('Voce nao está logado!');
    }
}
// Randomizacao
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function loggoff() {
    localStorage.setItem('username','');

    let outBtn = document.getElementById('loggoff');
    let like = document.getElementById('notLike');
    let inBtn = document.getElementById('login');

    like.setAttribute('style','display: none;');
    outBtn.setAttribute('style','display: none;');
    inBtn.setAttribute('style','display: block;');
    console.log(localStorage.getItem('username'))
}
