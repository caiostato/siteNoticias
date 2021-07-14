function loadMain(event){
    event.preventDefault();
    
    let user = localStorage.getItem('username');
    console.log(user);


    let titles = new Array();
    let str = new Array();
    let count = 0;
    let x = document.getElementsByClassName('noticiaPrincipal');

    db.collection("like")
        .where("user", "==", user).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((docLike) => {
                        
                    let notTitle = docLike.data().noticiaTitle;

                    db.collection("noticias")
                    .where("titulo", "==", notTitle).get()
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
                })


            })
            .catch((error) => {
                console.log(error);
            })

    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

