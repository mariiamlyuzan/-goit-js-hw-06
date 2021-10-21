const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 

const makeImageGallery = ({ url, alt }) => 
`<li><img src =${url} alt =${alt} width = 350></li>`;
const makeGallery = images.map(makeImageGallery).join(' ');
const galleryEl = document.querySelector('.gallery');
galleryEl.classList.add('gallery-box');
galleryEl.insertAdjacentHTML("afterbegin", makeGallery);


makeImageGallery(images);