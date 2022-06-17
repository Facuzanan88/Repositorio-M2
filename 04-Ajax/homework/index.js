// Resuelto con AJAX

/* $('#loading').hide();

$('#boton').click(() => {

    // alert('pelotudo a cuerda')
    let lista = $('#lista');
    lista.empty();

    $('#loading').show();

    $.get("http://localhost:5000/amigos", (data) => {

        for (amigo of data) {
            let li = document.createElement('li');
            li.innerText = amigo.name;
            lista.append(li);
        }
        $('#loading').hide();
        //console.log(data);
    });
});

$('#search').click(() => {
    let id = $("#input").val();
    $("#input").val("");

    $.get("http://localhost:5000/amigos/" + id, (amigo) => {
        $("#amigo").text(amigo.name)
    }).fail(() => {
        $("#amigo").text("El amiguito no existir")
    });
});

$('#delete').click(() => {
    let id = $("#inputDelete").val();
    $("#inputDelete").val("");

    $.ajax({
        url: "http://localhost:5000/amigos/" + id,
        type: "DELETE",
        success: (amigo) => {
            $("#success").text(`se elimino correctamente al amigo ${id}`);
        },
    });
});
 */



// Resuelto con JavaScript Puro

function getFriends() {
    document.getElementById('lista').innerHTML = ''; // primero vacio la lista
   
    let imagen = document.getElementsByTagName('img'); // imagen desaparece cuando aparece la lista de amigos
    if (imagen.length > 0) imagen[0].remove(); // remuevo la imagen del DOM

    fetch('http://localhost:5000/amigos')  // hace peticion al servidor
    .then(data => data.json()) // transformamos el json recibido en un objeto js
    .then(data => { // tengo un array de amigos 
        data.forEach(amigo => { //  [amigo1, amigo2, amigo3]
            let li = document.createElement('li'); //<li></li>
            li.textContent = amigo.name;
            document.getElementById('lista').appendChild(li);

        });
    });
}


function searchFriend() {
    let id = document.getElementById('input').value;
    document.getElementById('input').value = '';
    
    fetch(`http://localhost:5000/amigos/${id}`) // cuando no aclaro nada a traves de otro argumento es GET
    .then(data => data.json())
    .then(data => {
    document.getElementById('amigo').innerHTML = data.name;
    })
    
}


function deleteFriend() {
    let id = document.getElementById('inputDelete').value;
    document.getElementById('inputDelete').value = '';
    fetch(`http://localhost:5000/amigos/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        alert('amigo borrado')
        getFriends();
    })
}


document.getElementById('boton').addEventListener('click', getFriends);
document.getElementById('search').addEventListener('click', searchFriend)
document.getElementById('delete').addEventListener('click', deleteFriend);