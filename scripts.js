document.addEventListener('DOMContentLoaded', function() {
    // Enkel JavaScript for å vise en melding når noen abonnerer på nyhetsbrev
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            alert(`Takk for at du abonnerer, ${email}!`);
        });
    }
});