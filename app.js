

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sreeyeswanthr@gmail.com",
        Password : "644289F82ACFE9B151FF93BB98E39789142E",
        To : "sreeyeswanthr@gmail.com",
        From : document.getElementById("mail").value,
        Subject : "New Enquiry for Internship",
        Body : "Requesting details for intership oppurtunity"
    }).then(
        message => alert(message)
    );
};