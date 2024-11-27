const fig = document.querySelectorAll('.bus>figure');
const thumb = document.getElementById('thumb');
const bus = document.querySelector('.bus');
const slider = document.querySelector('.slider');
const r = document.getElementById('r');
const l = document.getElementById('l');
let w = slider.clientWidth;
let turn = 0;

////autoplay slidshow
setInterval(() => {
    r.click()
}, 2500)

///// bus width online
fig.forEach((val) => {
    val.style.width = w + 'px'

    let li = document.createElement('li')
    li.innerHTML = `
            <img src=${val.children[0].src}>
            `
    thumb.appendChild(li)
})


/////queryselectorAll Thumb

const thumbLi = document.querySelectorAll('#thumb>li');
thumbLi[0].style.transform = 'scale(1.2)'
thumbLi.forEach((val, i) => {

    val.addEventListener('click', () => {

        //// updating turn with i, means changing the turn by the one being clicked
        turn = i
        bus.style.left = -(turn * w) + 'px'

        thumbLi.forEach((item) => {
            item.style.transform = 'scale(1)'
        })

        val.style.transform = 'scale(1.2)'
    })


})


///// bus width onload
bus.style.width = ((fig.length) * w) + 'px'

/// right and left click 
r.addEventListener('click', () => {
    if (turn < fig.length - 1) {
        turn++;
        // bus.style.left = -(turn * w) + 'px'
    } else {
        turn = 0
    }
    ////this formula applies to both if and else
    bus.style.left = -(turn * w) + 'px'

    ////scale move with arrow
    thumbTurn()
})


l.addEventListener('click', () => {
    if (turn != 0) {
        turn--;
        // bus.style.left = -(turn * w) + 'px'
    } else {
        turn = fig.length - 1
    }
    ////this formula applies to both if and else
    bus.style.left = -(turn * w) + 'px'


    ////scale move with arrow
    thumbTurn()
})


function thumbTurn() {
    ////scale move with arrow
    thumbLi.forEach((item) => {
        item.style.transform = 'scale(1)'
    })

    thumbLi[turn].style.transform = 'scale(1.2)'
}