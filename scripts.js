//js code to validate form
window.addEventListener('load' , () => {

    const $email = document.getElementById('email');
    const $sub_form = document.getElementsByTagName("button")[0];
    const $alert = document.getElementsByClassName("message")[0];

    $sub_form.addEventListener('click' , (e) => {
        e.preventDefault();

        $email.value === null || $email.value === "" ? $alert.innerHTML = "Please enter a valid email address." : 
        
        $alert.innerHTML = "Thank you! Your email address, " + $email.value + " has been added to our mailing list.";
    })
})