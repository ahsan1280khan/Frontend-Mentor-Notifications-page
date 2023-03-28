const markall = document.querySelector("#markall");
const notification = document.querySelectorAll(".notification");
const active = document.querySelectorAll(".active");
const dot = document.querySelectorAll(".dot");
const counter = document.querySelector('#counter')



counter.innerHTML = active.length;

markall.addEventListener('click', ()=> {
    notification.forEach(element =>{
        element.classList.remove('active')
    })
    dot.forEach(element => {
        element.classList.remove('dot')
    })
    counter.innerHTML ='0';

});

notification.forEach(element =>{
    element.addEventListener('click', () => {
        element.classList.remove('active')

        const index = Array.from(notification).indexOf(element);
        dot[index].classList.remove('dot')

        counter.innerHTML = document.querySelectorAll(".active").length;

    })
})









