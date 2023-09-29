const svg = document.querySelector('svg#chart');
const btnShrink = document.querySelector('button#btnShrink');

// btnShrink.addEventListener('click', () => {
//     svg.style.width = "100px";
//     svg.style.height = "100px";
// });

// btnShrink.addEventListener('mouseover', () => {
//     svg.style.width = "200px";
//     svg.style.height = "200px";
// });

btnShrink.onclick=function() {
    svg.style.width = "100px";
    svg.style.height = "100px";
};

btnStretch.onclick=function() {
    svg.style.width = "800px";
    svg.style.height = "800px";
}

const inRadius = document.querySelector('#labelRadius input');
const outRadius = document.querySelector('#labelRadius output');
const circles = document.querySelectorAll('circle');

inRadius.oninput = () => {
    outRadius.innerHTML = inRadius.value;

    circles.forEach((circle) => {
        circle.setAttribute('r', inRadius.value);
    });
}





