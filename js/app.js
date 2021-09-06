const toggole = (id, property) => {
    document.getElementById(id).style.display = property;
}


const loadUni = () => {
    const searchInput = document.getElementById('search-text');
    const search = searchInput.value;
    searchInput.value ='';
    const url = `http://universities.hipolabs.com/search?country=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayUniversity(data))

    toggole('spinner', 'block')
    toggole('uni-section', 'none')
}

const search = document.getElementById('search-text');
search.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     loadUni()
    }
  });



const displayUniversity = universities => {
    const container = document.getElementById('universities');
    container.textContent = '';




    let nothingFound = document.getElementById('nothing-found');
        nothingFound.textContent ='';
    if(universities.length === 0){
        
        const div = document.createElement("div");
        div.classList = 'text-color';
        div.innerHTML = `
        <h3>Nothing found</h3> 
        <h6>No results containing all your search terms were found.</h6> 
      <ul>
        Suggestions:
        <li>Search universities by country name</li>
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>
            Try fewer keywords.
            </li>
      </ul>
        `
        nothingFound.appendChild(div)
    }
else{
    
const resultAmount = document.getElementById('results');

resultAmount.innerHTML = `<h5 class="w-50 mx-auto text-color mb-5">About ${universities.length} results found</h5>`


    universities.forEach ( university => {
       


        const div = document.createElement("div");
        div.classList = 'col';
        div.innerHTML = `
        <div class="card h-100 university-col">
                    
                    <div class="card-body">
                      <h6 class="card-title uni-color">${university.name}</h6>
                      <p class="card-text country-color">Country: ${university.country}</p>
                      <a class="hero-btn red-btn " id="my-btn text-center" target="_blank" href="${university.web_pages}">Visit</a>
                    </div>
                  </div>
        `
        container.appendChild(div)


        // console.log(university)
    })
}
    // console.log(universities);

    toggole('spinner', 'none')
    toggole('uni-section', 'block')
}


// showing 5 results by-defult

const loadUni1 = () => {
    // const searchInput = document.getElementById('search-text');
    // const search = searchInput.value;
    // searchInput.value ='';
    const url = `http://universities.hipolabs.com/search?country=bangladesh`
    fetch(url)
    .then(res => res.json())
    .then(data => displayUniversity1(data.slice(24,29)))

    toggole('spinner', 'block')
    toggole('uni-section', 'none')
}
loadUni1();

// const search = document.getElementById('search-text');
// search.addEventListener('keypress', function(even       t) {
//     if (event.keyCode === 13) {
//      event.preventDefault();
//      loadUni()
//     }
//   });

const container = document.getElementById('universities');
    container.textContent = '';
  const displayUniversity1 = universities => {
    universities.forEach ( university => {
  const div = document.createElement("div");
  div.classList = 'col';
  div.innerHTML = `
  <div class="card h-100 university-col">
              
              <div class="card-body">
                <h6 class="card-title uni-color">${university.name}</h6>
                <p class="card-text country-color">Country: ${university.country}</p>
                <a class="hero-btn red-btn " id="my-btn text-center" target="_blank" href="${university.web_pages}">Visit</a>
              </div>
            </div>
  `
  console.log(university)
  container.appendChild(div)
  } )
  toggole('spinner', 'none')
  toggole('uni-section', 'block')
 }
