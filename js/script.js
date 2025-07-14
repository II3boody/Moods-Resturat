const menu = document.querySelector(".menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    offScreenMenu.classList.remove('active');
    menu.classList.remove('active');
});


// Scroll effect for navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// dark-light map
document.addEventListener('DOMContentLoaded', () => {
    updateMapTheme(document.documentElement.getAttribute('data-theme'));
    document.querySelector('.theme-btn')?.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme');
        updateMapTheme(newTheme);
    });
});

function updateMapTheme(theme) {
    const mapLight = document.getElementById('map-light');
    const mapDark = document.getElementById('map-dark');

    if (!mapLight || !mapDark) return;

    if (theme === 'dark') {
        mapLight.style.display = 'none';
        mapDark.style.display = 'block';
    } else {
        mapLight.style.display = 'block';
        mapDark.style.display = 'none';
    }
}

const currentTheme = document.documentElement.getAttribute('data-theme');
updateMapTheme(currentTheme);

document.querySelector('.theme-btn')?.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme');
    updateMapTheme(newTheme);
});
document.addEventListener('DOMContentLoaded', () => {
    const userNameDiv = document.getElementById('userNameDiv');
    const userName = localStorage.getItem('loggedInUserName');

    if (!userNameDiv) {
        console.warn("Element with ID 'userNameDiv' not found.");
        return;
    }

    const displaySpan = document.createElement("span");
    displaySpan.textContent = userName || "Guest";
    userNameDiv.appendChild(displaySpan);

    const sign_menu = document.createElement("div");
    sign_menu.className = "sign-menu";
    sign_menu.style.cssText = "position:absolute;top:25px;left:50%;transform:translateX(-50%);padding:10px;background:#fff;border:1px solid #ccc;z-index:1000;display:none;";

    const signOutBtn = document.createElement('button');
    signOutBtn.textContent = 'Sign Out';
    signOutBtn.style.cursor = 'pointer';
    signOutBtn.style.marginRight = '10px';

    const signInBtn = document.createElement('button');
    signInBtn.textContent = 'Log In';
    signInBtn.style.cursor = 'pointer';

    sign_menu.append(signOutBtn, signInBtn);
    userNameDiv.append(sign_menu);
    userNameDiv.style.cursor = 'pointer';

    if (userName) {
        signInBtn.style.display = 'none';
    } else {
        signOutBtn.style.display = 'none';
    }

    userNameDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        sign_menu.style.display = (sign_menu.style.display === 'block') ? 'none' : 'block';
    });

    signOutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserName');
        window.location.reload();
    });

    signInBtn.addEventListener('click', () => {
        window.location.href = './sign-in.html';
    });
});
