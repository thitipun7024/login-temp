var jwt = localStorage.getItem("jwt")
if (jwt != null) {
    window.location.href = './web/index.html'
}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST","https://www.melivecode.com/api/login");
    xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "username": username,
        "password": password
    }));

    xhttp.onreadystatechange = function(){
    if (this.readyState == 4){
        const object = JSON.parse(this.responseText)
        console.log(object);
        if(object['status'] == 'ok'){
            localStorage.setItem("jwt",object["accessToken"]);
        } else {
            Swal.fire({
                title: 'user or password incorrect!',
                text: object['massage'],
                imageUrl: './img/pexels-monstera-7114345.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }

    }
    }
    return false;
}