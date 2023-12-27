const menuOpener = document.querySelector('aside > i');

menuOpener.addEventListener('click', () => {
    document.body.classList.add('closed-nav');
});
