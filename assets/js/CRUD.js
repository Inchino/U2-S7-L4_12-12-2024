const btnLoadImages = document.getElementById('loadImages');
const btnLoadSecondaryImages = document.getElementById('loadSecondaryImages');

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
    .catch((error)=>{
        console.log('error', error)
    })   
}

/*------ ESERCIZIO 3 ------*/