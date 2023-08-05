const accesskey = 'ctYuYOAWGMYZUnxDw_skNNAQz5Dy93lCTDuW_32relU'
let input = document.getElementById("input");
let search = document.getElementById("search");
let searchResult = document.getElementById("search-result");
let show_more = document.getElementById("show-more");


let keyword = "";
let page = 1;

async function searchImage(){
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank'

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    show_more.style.display = 'block'
}

search.addEventListener('click' , (e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})



show_more.addEventListener('click' , ()=>{
    page++;
    searchImage();
})








