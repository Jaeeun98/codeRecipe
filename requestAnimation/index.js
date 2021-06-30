const el = document.querySelector('.follow');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.body.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
})

tick();
function tick(){  
    requestAnimationFrame(tick);

    currentX += (mouseX - currentX - 20) * 0.1;
    currentY += (mouseY - currentY - 20) * 0.1;

    el.style.transform = `translate(${currentX}px, ${currentY}px)`;
}