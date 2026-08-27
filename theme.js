(function () {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const theme = savedTheme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);

    function updateButton(button) {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        button.querySelector(".theme-label").textContent = isLight ? "Dark" : "Light";
        button.querySelector(".theme-icon").textContent = isLight ? "☾" : "☀";
        button.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
        button.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
    }

    function initThemeToggle() {
        document.querySelectorAll(".theme-toggle").forEach(function (button) {
            updateButton(button);
            button.addEventListener("click", function () {
                const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
                document.documentElement.setAttribute("data-theme", next);
                localStorage.setItem("portfolio-theme", next);
                updateButton(button);
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initThemeToggle);
    } else {
        initThemeToggle();
    }
})();