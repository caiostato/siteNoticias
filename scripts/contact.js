function contact(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
        
        db.collection("contact").add({
            userName:name,
            userEmail:email,
            messageUser:message
        })
        .then(function(doRef){
            console.log("formulario enviado");
        })
        .catch(function(error){
            console.log(error);
        })		
}