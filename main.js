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

const textarea = document.getElementById('mensaje');

// Evento para ajustar la altura automáticamente
/* textarea.addEventListener('inputMensaje', function () {
    this.style.height = 'auto'; // Restablece la altura para recalcular
    this.style.height = this.scrollHeight + 'px'; // Ajusta la altura al contenido
}); */


// 🔹 hamburgesa
/* const menuToggle = document.querySelector(".menuToggle");
const menuContainer = document.querySelector(".menuContainer");

menuToggle.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
});
 */

const menuToggle = document.querySelector(".menuToggle");
const menuToggle2 = document.querySelector(".menuToggle2");
const menuContainer = document.querySelector(".menuContainer");

// 🔹 Evento para abrir el menú
menuToggle.addEventListener("click", () => {
    menuContainer.classList.add("active");
    menuToggle.style.display = "none";  // 🔥 Oculta el botón de abrir
});

// 🔹 Evento para cerrar el menú
menuToggle2.addEventListener("click", () => {
    menuContainer.classList.remove("active");
    menuToggle.style.display = "block";  // 🔥 Muestra el botón de abrir
});
