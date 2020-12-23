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

// Games Modal

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
    } if (event.target == modal6) {
        modal6.style.display = "none";
    } if (event.target == modal7) {
        modal7.style.display = "none";
    } if (event.target == modal8) {
        modal8.style.display = "none";
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

// modal 7

var modal6 = document.getElementById("myModal6");

var btn6 = document.getElementById("myBtn6");

var span = document.getElementsByClassName("close")[6];

btn6.onclick = function () {
    modal6.style.display = "block";
}

span.onclick = function () {
    modal6.style.display = "none";
}

// modal 8

var modal7 = document.getElementById("myModal7");

var btn7 = document.getElementById("myBtn7");

var span = document.getElementsByClassName("close")[7];

btn7.onclick = function () {
    modal7.style.display = "block";
}

span.onclick = function () {
    modal7.style.display = "none";
}

// modal 9

var modal8 = document.getElementById("myModal8");

var btn8 = document.getElementById("myBtn8");

var span = document.getElementsByClassName("close")[8];

btn8.onclick = function () {
    modal8.style.display = "block";
}

span.onclick = function () {
    modal8.style.display = "none";
}

//  Games Modal Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) { slideIndex2 = 1 }
    slides2[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 2000);
}

var slideIndex3 = 0;
showSlides3();

function showSlides3() {
    var i;
    var slides3 = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) { slideIndex3 = 1 }
    slides3[slideIndex3 - 1].style.display = "block";
    setTimeout(showSlides3, 2000);
}

var slideIndex4 = 0;
showSlides4();

function showSlides4() {
    var i;
    var slides4 = document.getElementsByClassName("mySlides4");
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    slideIndex4++;
    if (slideIndex4 > slides4.length) { slideIndex4 = 1 }
    slides4[slideIndex4 - 1].style.display = "block";
    setTimeout(showSlides4, 3000);
}

var slideIndex5 = 0;
showSlides5();

function showSlides5() {
    var i;
    var slides5 = document.getElementsByClassName("mySlides5");
    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }
    slideIndex5++;
    if (slideIndex5 > slides5.length) { slideIndex5 = 1 }
    slides5[slideIndex5 - 1].style.display = "block";
    setTimeout(showSlides5, 2000);
}

var slideIndex6 = 0;
showSlides6();

function showSlides6() {
    var i;
    var slides6 = document.getElementsByClassName("mySlides6");
    for (i = 0; i < slides6.length; i++) {
        slides6[i].style.display = "none";
    }
    slideIndex6++;
    if (slideIndex6 > slides6.length) { slideIndex6 = 1 }
    slides6[slideIndex6 - 1].style.display = "block";
    setTimeout(showSlides6, 2000);
}

var slideIndex7 = 0;
showSlides7();

function showSlides7() {
    var i;
    var slides7 = document.getElementsByClassName("mySlides7");
    for (i = 0; i < slides7.length; i++) {
        slides7[i].style.display = "none";
    }
    slideIndex7++;
    if (slideIndex7 > slides7.length) { slideIndex7 = 1 }
    slides7[slideIndex7 - 1].style.display = "block";
    setTimeout(showSlides7, 2000);
}

var slideIndex8 = 0;
showSlides8();

function showSlides8() {
    var i;
    var slides8 = document.getElementsByClassName("mySlides8");
    for (i = 0; i < slides8.length; i++) {
        slides8[i].style.display = "none";
    }
    slideIndex8++;
    if (slideIndex8 > slides8.length) { slideIndex8 = 1 }
    slides8[slideIndex8 - 1].style.display = "block";
    setTimeout(showSlides8, 2000);
}

var slideIndex9 = 0;
showSlides9();

function showSlides9() {
    var i;
    var slides9 = document.getElementsByClassName("mySlides9");
    for (i = 0; i < slides9.length; i++) {
        slides9[i].style.display = "none";
    }
    slideIndex9++;
    if (slideIndex9 > slides9.length) { slideIndex9 = 1 }
    slides9[slideIndex9 - 1].style.display = "block";
    setTimeout(showSlides9, 2000);
}



