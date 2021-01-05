function sendMail(params) {
    var tempParams = {
        email_address: document.getElementById("emailAddress").value,
        your_name: document.getElementById("yourName").value,
        postcode: document.getElementById("postcode").value,
        house_number: document.getElementById("houseNumber").value,
        street_name: document.getElementById("streetName").value,
    };

    emailjs.send('service_sgo6zyq', 'template_uyv7wkn', tempParams)
        .then(function (res) {
            console.log("success", res.status);
        })
};


























// window.onload = function () {
//     document.getElementById('contact-form').addEventListener('submit', function (event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = Math.random() * 100000 | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm('contact_service', 'contact_form', this)
//             .then(function () {
//                 console.log('SUCCESS!');
//             }, function (error) {
//                 console.log('FAILED...', error);
//             });
//     });
// }

//     from_name = getElementbyId('name'),
//     from_email = getElementbyId('email'),
//     my_address =  getElementbyId('postcode'),
// }
