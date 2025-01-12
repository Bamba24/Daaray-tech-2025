let navBarFixed = () => {
    let navBar = document.querySelector(".navContainer");

    let pos = document.documentElement.scrollTop;
    console.log(pos)

    if (pos > 10) {
        navBar.classList.add("fixed");

    } else {
        navBar.classList.remove("fixed");
    }
};

// scroll
let calcScrollValue = () => {
    let scrollProgress = document.getElementById('progress');
    let scrolProgressValue = document.getElementById('progressValue');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight)
    if (pos > 10) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })

    scrollProgress.style.background = `conic-gradient( #E94D1A ${scrollValue}%, white ${scrollValue}%)`;
}

// Ajouter un seul gestionnaire d'événements
window.addEventListener('scroll', () => {
    navBarFixed();
    calcScrollValue();
});

// Exécutez les fonctions une fois au chargement de la page
window.addEventListener('load', () => {
    navBarFixed();
    calcScrollValue();
});
