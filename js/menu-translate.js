
const products = [
    { img: "...snack box.png", titleKey: "Snack Box", detailsKey: "Includes 2 pieces of chicken, fries, 2 pieces of bread, coleslow", price: 109, category: "meals", subcategory: "chicken-meals" },
    { img: "...dinner box.png", titleKey: "Dinner Box", detailsKey: "Includes 3 pieces of chicken, fries, 3 pieces of bread, coleslow", price: 159, category: "meals", subcategory: "chicken-meals" },

];

function renderMenu() {
    const container = document.getElementById("menuContainer");
    container.innerHTML = "";

    products.forEach(prod => {
        const content = document.createElement("div");
        const heading = document.createElement("h2");
        heading.setAttribute("data-i18n", prod.titleKey);
        heading.textContent = prod.titleKey;

        const details = document.createElement("p");
        details.setAttribute("data-i18n", prod.detailsKey);
        details.textContent = prod.detailsKey;

        const viewBtn = document.createElement("button");
        viewBtn.setAttribute("data-i18n", "View");
        viewBtn.textContent = "View";

        content.append(heading, details, viewBtn);
        container.appendChild(content);
    });
}

// 2. Initialize translator
document.addEventListener("DOMContentLoaded", () => {
    renderMenu();

    const translator = new Translator({
        persist: true,
        detectLanguage: true,
        languages: ['en', 'ar'],
        defaultLanguage: 'en',
        filesLocation: '/i18n'
    });
    const lang = localStorage.getItem('language');
    translator.load(lang);

    document.querySelector('.lang-btn').addEventListener('click', () => {
        const next = translator.currentLanguage === 'en' ? 'ar' : 'en';
        translator.translatePageTo(next);
        document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', next);
        document.querySelector('.lang-btn').textContent = next === 'en' ? 'ع' : 'EN';
        localStorage.setItem('language', next);
    });
});
