document.addEventListener('DOMContentLoaded', function() {
    // Enkel JavaScript for � vise en melding n�r noen abonnerer p� nyhetsbrev
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            alert(`Takk for at du abonnerer, ${email}!`);
        });
    }
});