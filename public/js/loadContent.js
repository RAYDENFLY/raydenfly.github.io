document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk mengubah bahasa konten halaman
    function changeLanguage(language) {
        const selectedData = data[language];

        // Update title dan subtitle
        document.title = selectedData.pageTitle;
        const mainTitle = document.querySelector('h1');
        if (mainTitle) mainTitle.innerText = selectedData.pageTitle;

        const subtitle = document.querySelector('.subtitle');
        if (subtitle) subtitle.innerText = selectedData.pageDescription;

        // Update info kontak
        const contactContainer = document.querySelector('.contact-info');
        if (contactContainer) {
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
        }

        // Update About Me section
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            const aboutTitle = aboutSection.querySelector('h1');
            if (aboutTitle) aboutTitle.innerText = selectedData.aboutMe.title;

            const existingParagraphs = aboutSection.querySelectorAll('p');
            existingParagraphs.forEach(paragraph => paragraph.remove());

            const aboutContent = selectedData.aboutMe.description.map(paragraph => `<p>${paragraph}</p>`).join('');
            if (aboutTitle) aboutTitle.insertAdjacentHTML('afterend', aboutContent);
        }

        const visionApproachSection = document.querySelector('.visionaproach');
        if (visionApproachSection) {
            const visionTitle = document.querySelector('#vision h1');
            if (visionTitle) visionTitle.innerText = selectedData.title;
        
            visionApproachSection.innerHTML = selectedData.categories.map(category => {
                if (category.vision) {
                    return `
                        <div class="vision-box">
                            <div class="button-container">
                                <button class="button vision-ipad">${category.buttonText}</button>
                            </div>
                             <div class="content">
                                <p>${category.vision}</p>
                            </div>
                        </div>
                    `;
                } else if (category.approach) {
                    const approachList = category.approach.map(item => `<li>${item}</li>`).join('');
                    return `
                        <div class="approach-box">
                            <div class="button-container">
                                <button class="button approach-ipad">${category.buttonText}</button>
                            </div>
                            <div class="list">
                                <ol>${approachList}</ol>
                            </div>
                        </div>
                    `;
                }
            }).join('');
        }
        

        // Update Skills & Specialties section
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            const skillsTitle = document.querySelector('#skills h1');
            if (skillsTitle) skillsTitle.innerText = selectedData.skillsAndSpecialties.title;

            skillsSection.innerHTML = selectedData.skillsAndSpecialties.categories.map(category => {
                const skillsList = category.skills.map(skill => `<li>${skill}</li>`).join('');
                const iconsList = category.icons.map(icon => `<img src="${icon}" alt="" height="50" width="50"/>`).join('');

                return `
                    <div class="skills-box">
                        <div class="button-container">
                            <button class="button skills-ipad">${category.buttonText}</button>
                        </div>
                        <ul>${skillsList}</ul>
                        <div class="icons">${iconsList}</div>
                    </div>
                `;
            }).join('');
        }

        // Update Work Experience section
        const workExperienceContainer = document.querySelector('.workexperience');
        if (workExperienceContainer) {
            const workTitle = workExperienceContainer.querySelector('h1');
            const workContent = workExperienceContainer.querySelector('.work-content');

            if (workTitle) workTitle.innerText = selectedData.workExperience.title;
            if (workContent) {
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
            }
        }

        // Update Portfolio Section
        const portfolioSection = document.querySelector('.portfolio');
        if (portfolioSection) {
            const portfolioTitle = portfolioSection.querySelector('.section-title h1');
            const portfolioDescription = portfolioSection.querySelector('.section-title p');
            const filtersContainer = portfolioSection.querySelector('.filters');
            const projectContainer = portfolioSection.querySelector('.projects');

            if (portfolioTitle) portfolioTitle.innerText = selectedData.portfolio.title;
            if (portfolioDescription) portfolioDescription.innerText = selectedData.portfolio.description;

            if (filtersContainer) {
                filtersContainer.innerHTML = Object.keys(selectedData.portfolio.filters)
                    .map(filterKey => `
                        <button class="filter-button" data-filter="${filterKey}">
                            ${selectedData.portfolio.filters[filterKey]}
                        </button>
                    `).join('');
            }

            if (projectContainer) {
                projectContainer.innerHTML = selectedData.portfolio.projects.map(project => `
                    <div class="project-content">
                    <div class="project-card ${project.category}">
                        <img src="${project.imageUrl}" alt="${project.title}" />
                        <h3>${project.title}</h3>
                        <p class="project-company">
                        <strong>
                        ${project.company}
                        </strong>
                        <br/>
                        ${project.date}
                        </p>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
                        </div>
                         <div class="project-links">
                        <a href="${project.link}">
                            Website
                        </a>
                        </div>
                    </div>
                    </div>
                `).join('');
            }

            // Filter functionality
            const filterButtons = document.querySelectorAll('.filter-button');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.getAttribute('data-filter');
                    const projectItems = document.querySelectorAll('.project-item');
                    projectItems.forEach(item => {
                        item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
                    });
                });
            });
        }

        // Update Thank You section
        const thankYouElement = document.querySelector('.thank-you');
        if (thankYouElement) thankYouElement.innerHTML = selectedData.portfolio.thankYou;
    }

    // Memuat bahasa default (misalnya Bahasa Inggris)
    changeLanguage('en');

    // Event listener untuk tombol ganti bahasa
    const langButtonEn = document.getElementById('language-en');
    const langButtonId = document.getElementById('language-id');
    if (langButtonEn) langButtonEn.addEventListener('click', () => changeLanguage('en'));
    if (langButtonId) langButtonId.addEventListener('click', () => changeLanguage('id'));
});

// Set item dengan timestamp
localStorage.setItem('data', JSON.stringify(defaultData));
localStorage.setItem('dataExpiry', Date.now() + 100); // Set waktu kedaluwarsa

// Cek kedaluwarsa
if (Date.now() > localStorage.getItem('dataExpiry')) {
    localStorage.removeItem('data');
    localStorage.removeItem('dataExpiry');
}
