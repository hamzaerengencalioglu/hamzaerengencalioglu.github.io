document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        let validForm = true;

        const errorList = document.querySelectorAll('.error-message');
        errorList.forEach(function (msg) {
            msg.remove();
        });

        const nameInput = document.getElementById('name').value.trim();
        if (nameInput === '') {
            const error = document.createElement('div');
            error.classList.add('error-message');
            error.textContent = 'İsim ve Soyisim alanı boş olamaz.';
            document.getElementById('name').parentNode.appendChild(error);
            validForm = false;
        }

        const emailInput = document.getElementById('email').value.trim();
        const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailInput === '') {
            const error = document.createElement('div');
            error.classList.add('error-message');
            error.textContent = 'E-posta alanı boş olamaz.';
            document.getElementById('email').parentNode.appendChild(error);
            validForm = false;
        } else if (!email.test(emailInput)) {
            const error = document.createElement('div');
            error.classList.add('error-message');
            error.textContent = 'Lütfen geçerli bir e-posta adresi girin.';
            document.getElementById('email').parentNode.appendChild(error);
            validForm = false;
        }

        const messageInput = document.getElementById('message').value.trim();
        if (messageInput === '') {
            const error = document.createElement('div');
            error.classList.add('error-message');
            error.textContent = 'Mesaj alanı boş olamaz.';
            document.getElementById('message').parentNode.appendChild(error);
            validForm = false;
        }

        if (!validForm) {
            event.preventDefault();
        }
    });
});
