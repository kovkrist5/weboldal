const burger=document.getElementById('burger');
const cart= document.getElementById('cart');
const back= document.getElementById('back');
const backcart= document.getElementById('backcart');

const nav= document.getElementById('nav');
const header = document.getElementById('header');
const main = document.getElementById('main');
const sectionC = document.getElementById('sectionC');
const aside = document.getElementById('aside');




header.addEventListener('mouseover', function(){
    header.classList.add('header-active');
    main.classList.add('header-active');
})
header.addEventListener('mouseleave', function(){
    header.classList.remove('header-active');
    main.classList.remove('header-active');
})


burger.addEventListener('click', ()=>{
    nav.classList.add('nav-active');
    header.classList.add('nav-active');
    main.classList.add('nav-active');

    burger.classList.remove('burgercs');
})

back.addEventListener('click', ()=>{
    nav.classList.remove('nav-active');
    header.classList.remove('nav-active');
    main.classList.remove('nav-active');

    burger.classList.add('burgercs');
})


cart.addEventListener('click', ()=>{
    console.log("cart out");

    aside.classList.add('active');
    header.classList.add('nav-active');
    main.classList.add('nav-active');
})

backcart.addEventListener('click', ()=>{
    aside.classList.remove('active');
    header.classList.remove('nav-active');
    main.classList.remove('nav-active');

    console.log("cart back");
})

const products =[
    {
        id: '1',
        name : 'Hello Kitty',
        picture : 'Hellokitty.webp',
        price: 11900,
        inStock: true
    },
    {
        id: '2',
        name : 'My Melody',
        picture : 'mymelo.webp',
        price: 10900,
        inStock: true
    },
    {
        id: '3',
        name : 'Kuromi',
        picture : 'kuromi.webp',
        price: 10900,
        inStock: false
    },
    {
        id: '4',
        name : 'Cinnamonroll',
        picture : 'cinamon.webp',
        price: 10900,
        inStock: false
    },
    {
        id: '5',
        name : 'Pompompurin',
        picture : 'pompurin.webp',
        price: 10900,
        inStock: true
    },
    {
        id: '6',
        name : 'Badtz-Maru',
        picture : 'batz.webp',
        price: 9900,
        inStock: true
    },
    {
        id: '7',
        name : 'Keroppi',
        picture : 'keroppi.webp',
        price: 9900,
        inStock: true
    },
    {
        id: '8',
        name : 'Pochacco',
        picture : 'pocha.webp',
        price: 9900,
        inStock: true
    },
    {
        id: '9',
        name : 'My Sweet Piano',
        picture : 'sweetpiano.jpg',
        price: 9900,
        inStock: true
    },
]


products.forEach(products =>{
    sectionC.innerHTML += `
    <div id="section">
            <img src="${products.picture} ">
            <h2>${products.name}</h2>
            <p>${products.price}</p>` 
            if(products.inStock=true){
                sectionC.innerHTML += `<a class="addToCart" id="${products.id}" onclick="console.log(${products.id})"> Add to cart</button>`
            }
            else{
                sectionC.innerHTML +=`Nem elérherő`
            }
            sectionC.innerHTML +=`</div>`
    
})

const incart= {};



    
