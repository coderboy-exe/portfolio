const profile_btn = document.querySelector("#profile-btn");
const about_btn = document.querySelector("#about-btn");
const container = document.querySelector(".container");
const content_wrapper = document.querySelector(".content-wrapper");

const dark_btn = document.querySelector(".dark-btn");
const light_btn = document.querySelector(".light-btn");


about_btn.addEventListener('click', () => {
    container.classList.add("about-mode");
});

profile_btn.addEventListener('click', () => {
    container.classList.remove("about-mode");
});


dark_btn.addEventListener('click', () => {
    content_wrapper.classList.add("dark-mode");
});

light_btn.addEventListener('click', () => {
    content_wrapper.classList.remove("dark-mode");
});