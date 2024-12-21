
    const hamburger = document.getElementById('hamburger-icon');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');  // Toggle class active untuk menampilkan menu
    });
