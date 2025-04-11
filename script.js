// Gestione del menu a tendina per la versione mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) { // Controlla che gli elementi esistano
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            // Opzionale: Aggiungi/rimuovi una classe al body per bloccare lo scroll
            document.body.classList.toggle('mobile-nav-open');
            // Opzionale: Cambia l'icona hamburger in una X
             menuToggle.classList.toggle('active');
        });
    } else {
        console.warn("Elementi .menu-toggle o .mobile-nav non trovati.");
    }
});

// Puoi aggiungere qui altro JavaScript globale se necessario
