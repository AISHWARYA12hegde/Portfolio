// Typing Animation for Hero
const heroTitle = document.querySelector('.hero h2');
const heroText = 'AI & ML Enthusiast  Python, Java, C++, Frontend Developer | Building Data-Driven Applications';
let i = 0;

const typeEffect = () => {
    if (!heroTitle) return;
    if (i < heroText.length) {
        heroTitle.innerHTML += heroText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
};
if (heroTitle) {
    heroTitle.innerHTML = "";
    typeEffect();
}

// Dynamic Year
document.getElementById('year').innerText = new Date().getFullYear();

// Dark Mode Toggle
const toggleDarkMode = () => document.body.classList.toggle('dark-mode');

const darkModeBtn = document.createElement('button');
darkModeBtn.innerText = "Toggle Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.backgroundColor = "#3498db";
darkModeBtn.style.color = "#fff";
document.body.appendChild(darkModeBtn);
darkModeBtn.onclick = toggleDarkMode;

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "60px";
scrollBtn.style.right = "20px";
scrollBtn.style.backgroundColor = "#2c3e50";
scrollBtn.style.color = "#fff";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

// Modal for Peer Reviews
document.querySelectorAll('.peer-reviews td').forEach(td => {
    td.onclick = () => {
        const modal = document.createElement('div');
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0,0,0,0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        const modalContent = document.createElement('div');
        modalContent.style.background = "#fff";
        modalContent.style.padding = "20px";
        modalContent.style.borderRadius = "10px";
        modalContent.style.maxWidth = "600px";
        modalContent.innerHTML = `<p>${td.innerText}</p><button style="margin-top:10px;">Close</button>`;

        modalContent.querySelector('button').onclick = () => document.body.removeChild(modal);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    };
});
