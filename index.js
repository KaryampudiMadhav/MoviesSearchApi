const apilink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4fd0149d3b28ef26b1b27e4cf1445a0f&page=1';
const imgpath = 'https://image.tmdb.org/t/p/w1280'; // Fixed domain
const searchapi = 'https://api.themoviedb.org/3/search/movie?&api_key=4fd0149d3b28ef26b1b27e4cf1445a0f&query=';
const main = document.querySelector(".section");
const search = document.querySelector(".Search");
const text = document.querySelector(".text-left"); // Fixed query selector

FetchData(apilink);

function FetchData(url) {
  fetch(url)
    .then(res => res.json())
    .then(function(data){
      console.log(data.results);
      data.results.forEach(element => {

        // Create containers
        const divContainer = document.createElement("div");
        divContainer.setAttribute("class", "content");

        const divImgContainer = document.createElement("div");
        divImgContainer.setAttribute("class", "image-container");

        const divNameContainer = document.createElement("div");
        divNameContainer.setAttribute("class", "image-name");

        // Create and set the image
        const img = document.createElement("img");
        img.setAttribute("class", "image");
        img.src = imgpath + element.poster_path;
        divNameContainer.innerHTML = `${element.title}`;
        divImgContainer.appendChild(img);
        divContainer.appendChild(divImgContainer);
        divContainer.appendChild(divNameContainer);
        main.appendChild(divContainer);
      });
    });
}

// Add search event listener outside FetchData
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    main.innerHTML='';
    const searchItem = search.value;
    if (searchItem) {
      FetchData(searchapi + searchItem);
      console.log('data is fecthed sussecfully');
      search.value='';
    }
  }
});
