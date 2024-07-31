const btnHeight = 41;
const btnWidth = 73;

const maxWidth = window.innerWidth - btnWidth;
const maxHeigt = window.innerHeight - btnHeight;


window.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('noBtn');

    btn.addEventListener('mouseover', ()=>{

        btn.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        btn.style.top = Math.floor(Math.random() * (maxHeigt + 1)) + 'px';

    })
})