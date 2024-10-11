document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu a');
    const slider = document.querySelector('.slider');

    function moveSlider(event) {
        const item = event.target;
        const itemRect = item.getBoundingClientRect();
        const menuRect = item.closest('.menu').getBoundingClientRect();

        slider.style.top = `${itemRect.top - menuRect.top}px`;
        slider.style.height = `${itemRect.height}px`;

        menuItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }

    menuItems.forEach(item => {
        item.addEventListener('click', moveSlider);
    });

    // Initialize slider position
    const activeItem = document.querySelector('.menu a.active');
    if (activeItem) {
        moveSlider({ target: activeItem });
    }
});
