let homeScreen = document.querySelector(".home-score");
const guestScreen = document.querySelector(".guest-score");
const homeButtons = document.querySelector(".home-container .buttons");
const guestButtons = document.querySelector(".guest-container .buttons");
const reset = document.querySelector(".reset-button");

function handleHomeScore(target){
    if (target.classList.contains('home-free-throw')){
        homeScreen.textContent = Number(homeScreen.textContent) + 1;
    } else if (target.classList.contains('home-2points')){
        homeScreen.textContent = Number(homeScreen.textContent ) + 2;
    } else if (target.classList.contains('home-3points'))
        homeScreen.textContent = Number(homeScreen.textContent) + 3;
}

function handleGuestScore(target){
    if (target.classList.contains('guest-free-throw')){
        guestScreen.textContent = Number(guestScreen.textContent) + 1;
    } else if (target.classList.contains('guest-2points')){
        guestScreen.textContent = Number(guestScreen.textContent) + 2;
    } else if (target.classList.contains('guest-3points'))
        guestScreen.textContent = Number(guestScreen.textContent) + 3;
}

homeButtons.addEventListener('click', function (e){
    handleHomeScore(e.target);
})

guestButtons.addEventListener('click', function (e){
    handleGuestScore(e.target);
})

reset.addEventListener('click', function (){
    homeScreen.textContent = 0;
    guestScreen.textContent = 0;
})

// guestScreen.addEventListener('change', function (){
//     console.log('clicked');
//     guestScreen.classList.remove('highlight');
//     homeScreen.classList.remove('highlight');
//     if (Number(guestScreen.textContent) > Number(homeScreen.textContent))
//         guestScreen.classList.add('highlight');
//     else
//         homeScreen.classList.add('highlight');
// })
//
// homeScreen.addEventListener('change',function (){
//     guestScreen.classList.remove('highlight');
//     homeScreen.classList.remove('highlight');
//     if (Number(guestScreen.textContent) > Number(homeScreen.textContent))
//         guestScreen.classList.add('highlight');
//     else
//         homeScreen.classList.add('highlight');
// })
