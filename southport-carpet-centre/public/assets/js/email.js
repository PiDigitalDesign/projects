document.getElementById('contact-us-submit').addEventListener('click', event => {
    event.preventDefault();
    console.log("Start")
    const leadName = document.getElementById('name').value;
    const leadEmail = document.getElementById('email').value;
    const leadMobile = document.getElementById('phone').value;
    const leadMessage = document.getElementById('message').value;

    const settings = {
        "url": "/api/sendMailOverHTTP",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "email": leadEmail,
            "to": "pidigitaldesign123@gmail.com",
            "subject": `Website Enquiry - ${leadName}`,
            "name": leadName,
            "mobile": leadMobile,
            "message": leadMessage
        }
    };
    console.log("...")
    $.ajax(settings)
        .done(function (response) {
            console.log("Done!")
            console.log(response);
        });
});