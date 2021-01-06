function ValidateEmail(mail) {
    console.log(`Validating email ${mail}`);
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            mail
        )
    ) {
        return true;
    }
    return false;
}

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

function sendMail(params) {
    var tempParams = {
        email_address: document.getElementById("emailAddress").value,
        your_name: document.getElementById("yourName").value,
        postcode: document.getElementById("postcode").value,
        house_number: document.getElementById("houseNumber").value,
        street_name: document.getElementById("streetName").value,
    };

    if (ValidateEmail(tempParams.email_address)) {
        console.log("success");
        emailjs
            .send("service_sgo6zyq", "template_uyv7wkn", tempParams)
            .then(function (res) {
                console.log("success", res.status);
            });
    } else {
        alert("Your e-mail address is invalid");
        return false;
    }
}

button = document.getElementById("submit");
button.onclick = sendMail;