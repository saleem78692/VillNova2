
document.addEventListener("DOMContentLoaded", function () {

    const heroSlider = document.querySelector("#heroSlider");

    if (!heroSlider) return;

    heroSlider.addEventListener("slide.bs.carousel", function () {

        const active = heroSlider.querySelector(".carousel-item.active");

        if (!active) return;

        active.querySelectorAll(
            ".hero-badge, .hero-title, .hero-desc, .hero-btns, .hero-img"
        ).forEach(function (el) {

            el.style.animation = "none";
            el.offsetHeight; // Reflow
            el.style.animation = null;

        });

    });

});
