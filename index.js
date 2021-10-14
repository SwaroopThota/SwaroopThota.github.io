// emailjs
emailjs.init("user_Ia6f5p3gqotU73yNa79UH");
document.querySelector('#contact-form').onsubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
    emailjs.send("service_iwfvsa5","template_5maxbw5",{
    to_name: document.querySelector('#customer-name').value,
    to_email: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
})
.then(() => {
    document.querySelector('#customer-name').value="";
    document.querySelector('#email').value="";
    document.querySelector('#message').value="";
    document.querySelector('.btn-close').click();
    let  alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    let wrapper = document.createElement('div')
    let message = "primary alert-dismissible mt-4 text-center' role='alert'><i class='bi bi-check-circle-fill me-2'></i>We recieved your message and we are working on it!";
    wrapper.innerHTML = `<div class='alert alert-${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
    alertPlaceholder.append(wrapper)
    submitBtn.innerHTML = 'Send';
})
.catch((err) => {
    document.querySelector('.btn-close').click();
    let  alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    let wrapper = document.createElement('div')
    let message = "warning alert-dismissible mt-4 text-center' role='alert'><i class='bi bi-exclamation-triangle-fill me-2'></i>We are facing an issue right now. Please try again later. Thank you.";
    wrapper.innerHTML = `<div class='alert alert-${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
    alertPlaceholder.append(wrapper)
    submitBtn.innerHTML = 'Send';
});
console.log("Hello There");
}
// modal first input focus
let myModal = document.getElementById('contactModal')
let myInput = document.getElementById('customer-name')
myModal.addEventListener('shown.bs.modal',() => myInput.focus())
