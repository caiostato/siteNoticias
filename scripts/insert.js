function insert(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let url = document.getElementById('url').value;
    let corp = document.getElementById('corp').value;
    let type = document.getElementById('type').value;
    let user = localStorage.getItem('username');
    if(user !== null){


        
        db.collection("noticias").add({
            img:url,
            texto:corp,
            titulo:title,
            type:type
        })
        .then(function(doRef){
            console.log("noticia registrada");
        })
        .catch(function(error){
            console.log(error);
        })		
    }
    else {
        alert("Voce nao esta logado!");
    }
}