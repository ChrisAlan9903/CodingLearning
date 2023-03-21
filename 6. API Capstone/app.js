
const pussyContent = document.querySelector(".content");

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

    pussyContent.innerHTML += `<div class="container">
          <img src="${imgUrl}" alt="pussy" class="image-container"
          onerror="this.onerror=null; this.src="./MissingCat.png">
          <div><h4 class="cat-name">${catname}</h4></div>
          <div><p class="description">${catdesc}</p></div> 
          <div> <button class="button">Profile</button> </div>
          
          </div>
           `;
    // imageContainer.src = imgUrl
  }
}
catData();

