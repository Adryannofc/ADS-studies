const list = document.querySelectorAll('.item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let count = list.length;
let active = 0;


next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active += 1
    if (active > 2) {
        active = 0;
    }
    list[active].classList.add('active');
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active -= 1
    if (active < 0) {
        active = 2;
    }
    list[active].classList.add('active')
}

console.log(active);
