document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk mengubah bahasa konten halaman
    function changeLanguage(language) {
        // Pastikan data yang digunakan sesuai dengan bahasa yang dipilih
        const selectedData = data[language];

        // Update title dan subtitle
        document.title = selectedData.pageTitle;
        document.querySelector('h1').innerText = selectedData.pageTitle;
        document.querySelector('.subtitle').innerText = selectedData.pageDescription;

        // Update info kontak
        const contactContainer = document.querySelector('.contact-info');
        contactContainer.innerHTML = `
            <a href="mailto:${selectedData.contactInfo.email}">
                <i class="fas fa-envelope"></i> ${selectedData.contactInfo.email}
            </a>
            <a href="tel:${selectedData.contactInfo.phone}">
                <i class="fas fa-phone"></i> ${selectedData.contactInfo.phone}
            </a>
            <a href="${selectedData.contactInfo.cvLink}">
                <i class="fas fa-download"></i> DOWNLOAD CV
            </a>
        `;

        // Update About Me section
        const aboutSection = document.querySelector('.about-section');
        aboutSection.querySelector('h1').innerText = selectedData.aboutMe.title;

        // Hapus semua paragraf deskripsi yang ada
        const existingParagraphs = aboutSection.querySelectorAll('p');
        existingParagraphs.forEach(paragraph => paragraph.remove());

        // Tambahkan deskripsi baru
        const aboutContent = selectedData.aboutMe.description.map(paragraph => `<p>${paragraph}</p>`).join('');
        aboutSection.querySelector('h1').insertAdjacentHTML('afterend', aboutContent);

        // Update Vision dan Approach
        document.querySelector('.visionaproach h1').innerText = selectedData.title; // Mengubah title Vision & Approach
        document.querySelector('.visionaproach .content').innerText = selectedData.vision; // Mengubah deskripsi Vision
        const approachList = selectedData.approach.map(item => `<li>${item}</li>`).join('');
        document.querySelector('.visionaproach .list ol').innerHTML = approachList; // Mengubah daftar Approach

// Update Skills & Specialties section
const skillsSection = document.querySelector('.skills-section');

if (skillsSection) {
    const skillsTitle = document.querySelector('#skills h1'); // Select the h1 inside #skills container
    if (skillsTitle) {
        skillsTitle.innerText = selectedData.skillsAndSpecialties.title; // Update the title
    }
    
    // Update the content of the skills section with categories, skills, and icons
    skillsSection.innerHTML = selectedData.skillsAndSpecialties.categories.map(category => {
        const skillsList = category.skills.map(skill => `<li>${skill}</li>`).join('');
        const iconsList = category.icons.map(icon => `<img src="${icon}" alt="" height="50" width="50"/>`).join('');
        
        return `
            <div class="skills-box">
                <div class="button-container">
                    <button class="button">${category.buttonText}</button>
                </div>
                <ul>${skillsList}</ul>
                <div class="icons">${iconsList}</div>
            </div>
        `;
    }).join('');
}



        // Update Work Experience section
        const workExperienceContainer = document.querySelector('.workexperience');
        workExperienceContainer.querySelector('h1').innerText = selectedData.workExperience.title;

        const workContent = workExperienceContainer.querySelector('.work-content');
        workContent.innerHTML = selectedData.workExperience.experiences.map(experience => {
            const detailsList = experience.details.map(detail => `<li>${detail}</li>`).join('');
            return `
                <div class="work-column">
                    <div class="button-container">
                        <button class="button">${experience.buttonText}</button>
                    </div>
                    <ul>${detailsList}</ul>
                </div>
            `;
        }).join('<div class="work-divider"></div>');

        // Update Portfolio Section
        const portfolioSection = document.querySelector('.portfolio');
        portfolioSection.querySelector('.section-title h1').innerText = selectedData.portfolio.title;
        portfolioSection.querySelector('.section-title p').innerText = selectedData.portfolio.description;

        // Update Portfolio Filters
        const portfolioFilters = document.getElementById('portfolio-flters');
        portfolioFilters.innerHTML = `
            <li data-filter="*" class="filter-active">${selectedData.portfolio.filters.all}</li>
            <li data-filter=".filter-banner">${selectedData.portfolio.filters.banner}</li>
            <li data-filter=".filter-web">${selectedData.portfolio.filters.web}</li>
            <li data-filter=".filter-social">${selectedData.portfolio.filters.social}</li>
        `;

        // Update Thank You Section
        const thankYouElement = document.querySelector('.thank-you');
        thankYouElement.innerHTML = selectedData.portfolio.thankYou;
    }

    // Memuat bahasa default (misalnya Bahasa Inggris)
    changeLanguage('en');

    // Event listener untuk tombol ganti bahasa
    document.getElementById('language-en').addEventListener('click', () => changeLanguage('en'));
    document.getElementById('language-id').addEventListener('click', () => changeLanguage('id'));
});
