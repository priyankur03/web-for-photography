// Show sections with fade-in when scrolling
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});
