const fadeout = () => {
    setTimeout(() => {
        const loader = document.querySelector(".preloader");
        loader.classList.remove("preloader");
    }, 2000); // 2000 milliseconds = 2 seconds
}

window.addEventListener("load", fadeout);
