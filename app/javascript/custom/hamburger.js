const hamburger = () => {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', (event) => {
        
        mainNav.classList.toggle('active');
    });

}

export { hamburger };