document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Toggle class 'active' untuk menu dan hamburger
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Tutup menu saat link diklik
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    // Menangani klik dropdown
    dropdowns.forEach(item => {
        const dropdownContent = item.querySelector(".dropdown-content");
        
        item.addEventListener("click", (e) => {
            // Cegah klik pada dropdown untuk menutupnya langsung
            e.stopPropagation();

            // Toggle dropdown
            item.classList.toggle("active");
        });
    });

    // Menutup dropdown saat klik di luar dropdown
    document.addEventListener("click", (e) => {
        dropdowns.forEach(item => {
            // Jika klik di luar dropdown, tutup dropdown
            if (!item.contains(e.target)) {
                item.classList.remove("active");
            }
        });
    });
});
