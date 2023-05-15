document.getElementById('contact-us-submit').addEventListener('click', event => {
    event.preventDefault();
    console.log("Start")
    const leadEmail = document.getElementById('email').value;
    const leadMobile = document.getElementById('phone').value;
    const leadName = document.getElementById('name').value;
    const leadMessage = document.getElementById('message').value;

    const settings = {
        "url": "/api/sendMailOverHTTP",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "uuid": "a38044de-0f04-4fea-8fa8-d5f174aa46bc",
            "email": leadEmail,
            "mobile": leadMobile,
            "name": leadName,
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