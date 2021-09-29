const hamburger = document.querySelector('.hamburger')
const navItems = document.querySelector('.nav-items')
const my_body = document.querySelector("body")


let hamburgerActive = true

hamburger.addEventListener('click', ()=>{
    if (hamburgerActive === true) {
        hamburger.classList.add('active');
        navItems.style.right = '0px';
        my_body.style.overflowY ='hidden'
    } else {
        hamburger.classList.remove('active');
        navItems.style.right = '-50%';
        my_body.style.overflowY ='scroll'
    }
    hamburgerActive = !hamburgerActive

})


