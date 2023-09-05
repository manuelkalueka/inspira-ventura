function hideLoader() {
    document.addEventListener("DOMContentLoaded", () => {
        const loaderContainer = document.querySelector(".loader-container");
        // Remova o loader após o conteúdo ser totalmente carregado
        setTimeout(() => {
            loaderContainer.style.display = "none";
        }, 1000);
    });
}

hideLoader();