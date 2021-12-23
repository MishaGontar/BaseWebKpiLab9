update()
function click () {
    alert('Hello')
}
function update() {
    const req = 'getPhoto.php'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', req);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
            return;
        }
        const response = JSON.parse(xhr.responseText);
        console.log(response)
        let html = [];
        for (let i = 0; i < response.length; i++) {
            html.push(
                `<div class="image__wrapper" align="center">
                        <div class="name">${response[i].name}</div>
                        <button type="button" onclick="del(${response[i].id})">Delete</button>
                        <div id="container">
                        <img  onclick="window.open('uploads/${response[i].file_name}')" src="uploads/${response[i].file_name}" alt="I am photo )" ><br><br>
                        </div>
                     </div>
`);
        }
        document.getElementById("all").innerHTML = html.join('');
    }
    xhr.send();
}

function del(t) {
    const formData = `idi=${t}`
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'delete.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(formData);
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
            return;
        }
    }
    update()
}