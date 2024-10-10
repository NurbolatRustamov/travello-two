const menuBtn = document.getElementById('menu_btn')
const MenuResponsivStyle = document.querySelector('.menu_responsiv')
const btnPlane = document.querySelectorAll('.btn-plane')
const boxChild = document.querySelectorAll('.box')

btnPlane[0].classList.add('active');
boxChild[0].classList.add('active');

btnPlane.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        btnPlane.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        boxChild.forEach(box => { box.classList.remove('active') });
        boxChild[index].classList.add('active');
    })
})




MenuBtn.addEventListener('click', () => {
    MenuResponsivStyle.classList.toggle('hide')
})