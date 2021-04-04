window.addEventListener('scroll', function () {
    const windowScrollPosition = window.pageYOffset;

    const scrollButton = document.getElementsByClassName("scroll-button");
    // debugger
    if (windowScrollPosition >= 120) {
        scrollButton[0].style.transform = "translateX(0px)";
    } else {
        scrollButton[0].style.transform = "translateX(120px)";
    }
});


