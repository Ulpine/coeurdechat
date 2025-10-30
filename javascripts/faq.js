const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');

        // Fermer toutes les autres réponses
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });

        // Ouvrir celle-ci si elle n'était pas ouverte
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});
