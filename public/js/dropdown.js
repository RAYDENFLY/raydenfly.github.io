    document.addEventListener('DOMContentLoaded', function() {
        const dropdownButton = document.querySelector('.btn');
        const dropdownContent = document.querySelector('.dropdown-content');

        dropdownButton.addEventListener('click', function() {
            dropdownContent.classList.toggle('show');
        });

        // Tutup dropdown jika pengguna mengklik di luar dropdown
        window.addEventListener('click', function(event) {
            if (!event.target.matches('.btn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    });

    