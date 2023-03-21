
const pussyBody = document.querySelector("body");

const ENDPOINT = "https://api.thecatapi.com/v1/breeds";
const IMAGES = "https://cdn2.thecatapi.com/images/";
let apiLength = 0;

async function getData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  apiLength = data.length;
  console.log(apiLength);
  return data;
}


async function catData() {
  const catData = await getData();
  for (let i = 0; i <= apiLength - 1; i++) {
    let catname = catData[i].name;
    let catdesc = catData[i].description;
    let catImgName = catData[i].reference_image_id;
    let imgUrl = `${IMAGES}${catImgName}.jpg`;

    pussyBody.innerHTML += `<div class="container">
          <img src="${imgUrl}" alt="pussy" class="image-container">
          <h4 class="cat-name">${catname}</h4>
          <p class="description">${catdesc}</p> 
          <button class="button">Profile</button> `;
    // imageContainer.src = imgUrl
  }
}
catData();

