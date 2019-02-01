// Your code goes here

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', e => {
    return (e.target.style.color = 'red');
});

const chgImgIn = document.querySelector('.intro img');
chgImgIn.addEventListener('mouseenter', e => {
    e.target.src = 'http://unsplash.it/800/300';
    e.stopPropagation();
    return;
});

const chgImgOut = document.querySelector('.intro img');
chgImgOut.addEventListener('mouseleave', e => {
    e.target.src = 'http://unsplash.it/800/301';
    e.stopPropagation();
    return;
});

const chgIntroText = document.querySelector('.intro h2');
chgIntroText.addEventListener('mouseover', e => {
    return (e.target.innerHTML = 'Welcome to the not so fun bus');
    e.stopPropagation();
});

const chgP = document.querySelector('.intro p');
chgP.addEventListener('copy', e => {
    e.target.style.fontSize = '2rem';
    e.target.style.color = 'cadetBlue';
    e.stopPropagation();
    return;
});

const textContentH2 = document.querySelector('.text-content h2');
textContentH2.addEventListener('cut', e => {
    return (e.target.style.transform = 'scale(2)');
    e.stopPropagation();
});

const textContentP = document.querySelector('.text-content p');
textContentP.addEventListener('mouseout', e => {
    return (e.target.style.color = 'green');
    e.stopPropagation();
});

const imgContent = document.querySelectorAll('.img-content');
imgContent.forEach(item =>
    item.addEventListener('drag', e => {
        const random = Math.floor(Math.random() * 9);
        imgContent.forEach(
            item => (e.target.src = `http://unsplash.it/300/30${random}`)
        );
        e.stopPropagation();
        return;
    })
);

const contentDestinationImg = document.querySelector(
    '.content-destination img'
);
contentDestinationImg.addEventListener('mousemove', e => {
    e.target.style.border = '3px solid orange';
});

const btnInner = document.querySelector('.btn');
btnInner.addEventListener('mouseenter', e => {
    return (e.target.style.color = 'green');
});

const btnOuter = document.querySelector('.btn');
btnOuter.addEventListener('click', e => {
    e.target.style.backgroundColor = 'red';
    e.target.style.color = 'yellow';
    e.stopPropagation();
});

const btnOut = document.querySelector('.btn');
btnOut.addEventListener('mouseout', e => {
    return (e.target.style.backgroundColor = 'blue');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => {
    const arr = ['google', 'facebook', 'twitter'];
    const random = Math.floor(Math.random() * arr.length);
    const site = arr[random];

    item.addEventListener('click', e => {
        e.target.href = `https://www.${site}.com`;
        e.preventDefault();
    });
});
