var templateParams = {
    from_name: "adam",
    from_email: "adamkcook94@hotmail.com",
    my_address: "78 guilford street",
}

emailjs.send('service_eln9q7e', 'template_umzf0j4', templateParams)
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    });























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
