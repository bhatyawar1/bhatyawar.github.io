
const toggleBtn = document.querySelector('.toggle-btn');
const navigation = document.querySelector('.nav-items');

function toggleMenu(x) {
    toggleBtn.classList.toggle("change");
    navigation.classList.toggle('active');
    toggleButton()

}

const toggleButton = () => {
    // navigation.classList.toggle('active');
    toggle.classList.toggle("change");
}

const tablinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}


// contact form 
const msg = document.getElementById('msg')
const scriptURL = 'https://script.google.com/macros/s/AKfycbyq-md02U0zlGE85K3xzVJh5m1efRJpW2RxF_W4ODSLUpvzktiNmw2Hdtov91SSwRJd/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerText = "Message sent successfully"
            setTimeout(() => {
                msg.innerText = ''
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})









