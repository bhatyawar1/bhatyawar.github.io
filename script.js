
const cross = document.querySelector('.fa-xmark');
cross.style.display = 'none';
const togglebtn = document.querySelector('.toggle-buttons');
const bar = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const liItems = document.querySelectorAll('.liItems');
togglebtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebarGo');
    // if (sidebar.classList.contains('sidebarGo')) {
    //     bar.style.display = 'inline';
    //     cross.style.display = 'none';
    // } else {
    //     bar.style.display = 'none';
    //     setTimeout(() => {
    //         cross.style.display = 'inline';
    //     }, 300)

    // }
});
liItems.forEach(element => {
    element.addEventListener('click', () => {
        sidebar.classList.toggle('sidebarGo');
    })
})

let typed = new Typed('.typing', {
    strings: ["Student", "Web Developer", "Student", "Coder"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

