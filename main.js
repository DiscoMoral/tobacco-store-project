// Check Age---------------------------------------------------------------------

if(!localStorage.getItem('18')){
  if(confirm('Вам есть 18?')) {
    localStorage.setItem('18', 'true');
  }
  else{
    alert('Просим покинуть наш сайт');
  }
}

// YaMap--------------------------------------------------------------------------

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
  center: [54.993339, 73.266127],
  zoom: 15
});

var myPlacemark = new ymaps.Placemark([54.993339, 73.266127], {}, {
  iconLayout: 'default#image',
  iconImageHref: './images/svg/point.svg',
  iconImageSize: [28, 40],
  iconImageOffset: [-3, -42]
});

  myMap.geoObjects.add(myPlacemark);
}

// Showing block

const bongsBtnMore = document.querySelector('.bongs__button');
const bongsItem = document.querySelectorAll('.bong');
const pipesBtnMore = document.querySelector('.pipes__button');
const pipesItem = document.querySelectorAll('.pipe');
const liftersBtnMore = document.querySelector('.lifters__button');
const liftersItem = document.querySelectorAll('.lifter');
const othersBtnMore = document.querySelector('.others__button');
const othersItem = document.querySelectorAll('.other');

bongsBtnMore.addEventListener('click', () => {
  bongsItem.forEach(el => { el.classList.add('bong--visible')});
  bongsBtnMore.closest('.bongs__center').classList.add('bongs-center--hidden');
})

pipesBtnMore.addEventListener('click', () => {
  pipesItem.forEach(el => { el.classList.add('pipe--visible')});
  pipesBtnMore.closest('.pipes__center').classList.add('pipes-center--hidden');
})

liftersBtnMore.addEventListener('click', () => {
  liftersItem.forEach(el => { el.classList.add('lifter--visible')});
  liftersBtnMore.closest('.lifters__center').classList.add('lifters-center--hidden');
})

othersBtnMore.addEventListener('click', () => {
  othersItem.forEach(el => { el.classList.add('other--visible')});
  othersBtnMore.closest('.others__center').classList.add('others-center--hidden');
})