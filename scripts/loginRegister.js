function authenticateUser(event){
    event.preventDefault();
    let email = document.getElementById("loginId").value;
    let senha = document.getElementById("loginPassword").value;
    firebase.auth().signInWithEmailAndPassword(email,senha)
    .then(function(){
        console.log("Usuario logado com sucesso");
        user = firebase.auth().currentUser;
        
        localStorage.setItem('username',user.uid);
    })
    .catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        alert("ERRO");
    })
}

function registerPage() {
    window.open("/siteNoticias/htmls/register.html");
}

function createUser(event){
    event.preventDefault();
    let email = document.getElementById("registerId").value;
    let senha = document.getElementById("registerPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(function(){
        console.log("Usuario criado com sucesso!");
        alert("Usuario criado com sucesso!");
    })
    .catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
}
//loggoff