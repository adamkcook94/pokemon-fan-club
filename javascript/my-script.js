$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            600
        );
    }
});

// Modal

// modal javascript

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } if (event.target == modal1) {
        modal1.style.display = "none";
    } if (event.target == modal2) {
        modal2.style.display = "none";
    } if (event.target == modal3) {
        modal3.style.display = "none";
    } if (event.target == modal4) {
        modal4.style.display = "none";
    } if (event.target == modal5) {
        modal5.style.display = "none";
    }
}



// modal 2

var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("myBtn1");

var span = document.getElementsByClassName("close")[1];

btn1.onclick = function () {
    modal1.style.display = "block";
}

span.onclick = function () {
    modal1.style.display = "none";
}

// modal 3

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close")[2];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span.onclick = function () {
    modal2.style.display = "none";
}

// // modal 4 

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("myBtn3");

var span = document.getElementsByClassName("close")[3];

btn3.onclick = function () {
    modal3.style.display = "block";
}

span.onclick = function () {
    modal3.style.display = "none";
}

// modal 5

var modal4 = document.getElementById("myModal4");

var btn4 = document.getElementById("myBtn4");

var span = document.getElementsByClassName("close")[4];

btn4.onclick = function () {
    modal4.style.display = "block";
}

span.onclick = function () {
    modal4.style.display = "none";
}

// modal 6

var modal5 = document.getElementById("myModal5");

var btn5 = document.getElementById("myBtn5");

var span = document.getElementsByClassName("close")[5];

btn5.onclick = function () {
    modal5.style.display = "block";
}

span.onclick = function () {
    modal5.style.display = "none";
}


// var modal3 = document.getElementById("myModal3");

// var btn3 = document.getElementById("myBtn3");

// var span = document.getElementsByClassName("close")[3];

// btn3.onclick = function () {
//     modal3.style.display = "block";
// }

// span.onclick = function () {
//     modal3.style.display = "none";
// }




// Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 500);
}



ScrollReveal().reveal('.headline', { duration: 2000 })

