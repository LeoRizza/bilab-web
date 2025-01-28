/* const faqItems = document.querySelectorAll('.faq-item');

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
    }); */

    const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Cierra todos los demás desplegables
        faqItems.forEach(i => {
            if (i !== item) {
                const iAnswer = i.querySelector('.faq-answer');
                i.classList.remove('open');
                iAnswer.style.height = '0'; // Colapsa otros desplegables
                i.querySelector('.faq-icon').textContent = '+';
            }
        });

        // Alterna el desplegable actual
        if (isOpen) {
            item.classList.remove('open');
            answer.style.height = '0'; // Colapsa
            icon.textContent = '+';
        } else {
            item.classList.add('open');
            answer.style.height = answer.scrollHeight + 'px'; // Expande
            icon.textContent = '-';
        }
    });
});
