const siteData = {
    heroTitle: "Game/XR/Unity Developer | Creative Technologist | Interactive Installations | Designing and Crafting Playful Experiences",
};

function updateDynamicContent() {
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.textContent = siteData.heroTitle;
    }
}

document.addEventListener('DOMContentLoaded', updateDynamicContent);
