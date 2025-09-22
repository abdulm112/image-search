const accessKey = 'GWDtQgnP-fL-x1ga2rMuq-tHBmGsQsnIIqEFaavtvY4';

const inputArea = document.getElementById("inputArea");
const searchBtn = document.getElementById("searchBtn");
const showMoreBtn = document.getElementById("showMoreBtn");
const pictures = document.getElementById("pictures");

let wordSearched = '';
let page = 1;

async function searchImg() {
  wordSearched = inputArea.value;
  const api = await fetch(`https://api.unsplash.com/search/photos?page= ${page} &query=${wordSearched}&client_id=${accessKey}&per_page=12`);
  const response = await api.json()

  if (page === 1) {
    pictures.innerHTML = ''
  }
    
  const results = response.results;


  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const aTag = document.createElement("a");
    aTag.href = result.links.html;
    aTag.target = "_blank"
    
    aTag.appendChild(image);
    pictures.appendChild(aTag)

    showMoreBtn.style.display = 'block'
  })
};


searchBtn.addEventListener("click", () => {
  page = 1;
  searchImg();
});

showMoreBtn.addEventListener("click", () => {
  page++
  searchImg();
})