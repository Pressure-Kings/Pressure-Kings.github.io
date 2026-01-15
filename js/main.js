// Smooth scrolling to top
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Toggle service field visibility based on subject selection
function toggleServiceField(value) {
    const serviceField = document.getElementById('service-field');
    if (value === 'All Services') {
        serviceField.style.display = 'block';
    } else {
        serviceField.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            if (document.getElementById(targetId)) {
                e.preventDefault();
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
