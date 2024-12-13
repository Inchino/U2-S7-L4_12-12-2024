const btnLoadImages = document.getElementById('loadImages');
const btnLoadSecondaryImages = document.getElementById('loadSecondaryImages');
const inputSearch = document.getElementById("inputSearch");
const btnSearch = document.getElementById("btnSearch");

const createCards = function (photos) {
    let row = document.querySelector('.album .container .row')
    row.innerHTML = ''
    photos.forEach((photo) => {
      let colTemplate = `
      <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <a href="./pexels-details.html?photoId=${photo.id}">
              <img src=${photo.src.small}} style="width: 100%" />
          </a>
              <div class="card-body">
              <a href="./pexels-details.html?photoId=${photo.id}">
                  <h5 class="card-title">Lorem Ipsum</h5>
              </a>
                  <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  </p>
                  <div
                  class="d-flex justify-content-between align-items-center"
                  >
                  <div class="btn-group">
                      <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="fillImageInModal(this)"
                      >
                          View
                      </button>
                      <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      onclick="hideColumn(this)"
                      >
                      Hide
                      </button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                  </div>
              </div>
          </div>
      </div>
      `
      row.innerHTML += colTemplate
    })
  }

/*------ ESERCIZIO 1 ------*/

btnLoadImages.addEventListener('click', function (e) {
    e.preventDefault();
    LoadImages();
})

function LoadImages(){
    fetch(`https://api.pexels.com/v1/search?query=mountain&per_page=9`,{
        method: 'GET',
        headers: {
            'Authorization': 'MqyJQlhAUKzcYIWiyCF6BNqSqRFPR1x7DRjQJOt4oinE2TdIFWy9ULT7'
        },
    })
    .then(response=>{
        console.log('response', response)
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Errore nella chiamata')
        }
    })
    .then((data) => {
        console.log(data)
        createCards(data.photos)
      })
    .catch((error)=>{
        console.log('error', error)
    })
}

/*------ ESERCIZIO 2 ------*/

btnLoadSecondaryImages.addEventListener('click', function (e) {
    e.preventDefault();
    LoadSecondaryImages();
})

function LoadSecondaryImages(){
    fetch(`https://api.pexels.com/v1/search?query=sunset&per_page=9`,{
        method: 'GET',
        headers: {
            'Authorization' : 'MqyJQlhAUKzcYIWiyCF6BNqSqRFPR1x7DRjQJOt4oinE2TdIFWy9ULT7'
        },
    })
    .then(response=>{
        console.log('response', response)
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Errore nella chiamata')
        }
    })
    .then((data) => {
        console.log(data)
        createCards(data.photos)
      })
    .catch((error)=>{
        console.log('error', error)
    })   
}

/*------ Esercizio 3 ------*/
/*Completato con la renderizzazione delle card e creazione del button Hide*/

/*------ Esercizio 4 ------*/
const hideColumn = function (context) {
    let colDelete = context.closest('.col-md-4')
    colDelete.remove()
}

/*------ Esercizio 5 ------*/
/*Completato con la renderizzazione delle card e inserimento nel div small con la foto id*/

/*------ Esercizio 6 ------*/

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
})


