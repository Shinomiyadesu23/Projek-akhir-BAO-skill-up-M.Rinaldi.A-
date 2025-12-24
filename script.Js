document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form dikirim secara default

            // Simulasi pengiriman data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Log data ke konsol
            console.log('Formulir berhasil disubmit!');
            console.log('Nama:', name);
            console.log('Email:', email);
            console.log('Pesan:', message);

            // Tampilkan pesan sukses
            formMessage.textContent = `Terima kasih, ${name}! Pesan Anda telah kami terima. Saya akan segera membalasnya.`;
            formMessage.style.display = 'block';

            // Reset formulir setelah beberapa detik
            setTimeout(() => {
                contactForm.reset();
                formMessage.style.display = 'none';
            }, 3000);
        });
    }
});