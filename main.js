const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Cierra todos los demás desplegables
            faqItems.forEach(i => {
                i.classList.remove('open');
                i.querySelector('.faq-icon').textContent = '+'; // Cambia íconos a +
            });

            // Alterna el estado del actual
            if (!isOpen) {
                item.classList.add('open');
                icon.textContent = '-'; // Muestra el ícono de cerrar
            } else {
                item.classList.remove('open');
                icon.textContent = '+'; // Muestra el ícono de abrir
            }
        });
    });