document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const emailInput = document.getElementById('email');
        if(email.value) {
            messageDiv.innerHTML = `Thank you! Your email address <strong>${email.value}</strong> has been added to our mailing list!`;
            emailInput.value = '';
        
        }

    });
});
