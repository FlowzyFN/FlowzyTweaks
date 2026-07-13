const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (window.scrollY / totalHeight) * 100;

    progress.style.width = progressWidth + "%";
});
