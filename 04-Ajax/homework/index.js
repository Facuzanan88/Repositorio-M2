const loading = $('#loading');
//  loading.hide();

function getFriends() {

    loading.show();
    document.getElementById('lista').innerHTML = '';

    fetch('http://localhost:5000/amigos')
        .then(data => data.json())
        .then(data => {
            data.forEach(amigo => {
                console.table(amigo)
                let liOne = document.createElement('li');

                liOne.innerHTML = amigo.name;

                document.getElementById('lista').appendChild(liOne);

            });
            loading.hide();
        })


}

function getFriendInfo() {
    let id = document.getElementById('input').value;
    console.log(id);
    document.getElementById('input').value = '';

    fetch(`http://localhost:5000/amigos/${id}`)
        .then(data => data.json())
        .then(data => {
            document.getElementById('amigo').innerHTML = data.name;
            document.getElementById('amigoAge').innerHTML = data.age;
            document.getElementById('amigoEmail').innerHTML = data.email;

        })
    /*    .fail(() => {
           document.getElementById('inputDelete').value = 'Amigo No EXISTE';
       }) */
}

function DeleteFriend() {
    let id = document.getElementById('inputDelete').value;
    document.getElementById('inputDelete').value = '';

    fetch(`http://localhost:5000/amigos/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            document.getElementById('success').innerHTML = 'tu compa fue eliminado Correctamente';
            alert('Amigo Borrado');
            getFriends();
        })
}

document.getElementById('boton').addEventListener('click', getFriends);
document.getElementById('search').addEventListener('click', getFriendInfo);
document.getElementById('delete').addEventListener('click', DeleteFriend);