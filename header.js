const menuCloser = document.querySelector('header > i');

// there are pages where there is header but no aside(guest mode)
if (menuCloser) {
    menuCloser.addEventListener('click', () => {
        document.body.classList.remove('closed-nav');
    });
}
