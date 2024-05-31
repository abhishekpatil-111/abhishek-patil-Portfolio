// Disable background scrolling when the hire me modal window is open
document.addEventListener('DOMContentLoaded', (event) => {
    const hireButton = document.getElementById('hireButton');
    const hireModal = document.getElementById('hireModal');
    const closeModalButtons = hireModal.querySelectorAll('[data-dismiss="modal"]');

    hireButton.addEventListener('click', () => {
        hireModal.style.display = 'block';
        document.body.classList.add('no-scroll');
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            hireModal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });
    });

    // Optional: Hide modal if clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === hireModal) {
            hireModal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});
