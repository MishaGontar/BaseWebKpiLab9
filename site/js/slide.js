window.onload = ()=> update()
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
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
        let spans = [];
        for (let i = 0; i < response.length; i++) {
            html.push(
                `<div class="mySlides fade">
                    <div class="numbertext" style="color: orangered">${i + 1} / ${response.length}</div>
                    <img src="uploads/${response[i].file_name}" alt='I am photo )' style="width:100%">
                </div>`);
            spans.push(
                `<span class="dot" onclick="currentSlide(${i+1})"></span>`
            )
        }
        console.log(spans.join(''))
        console.log(html.join(''))
        document.getElementById("conter").innerHTML = html.join('');
        document.getElementById("btn").innerHTML = spans.join('');
        currentSlide(1);
    }
    xhr.send();
}