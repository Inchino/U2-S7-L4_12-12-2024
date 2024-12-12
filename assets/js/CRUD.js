fetch(`https://www.pexels.com/it-it/api`,{
    method: 'GET',
    headers: {
        Authorization: 'MqyJQlhAUKzcYIWiyCF6BNqSqRFPR1x7DRjQJOt4oinE2TdIFWy9ULT7'
    },
})
.then(response=>{
    console.log('response', response)
    if(response.ok){
        return response.json()
    }else{
        return new Error('Errore nella chiamata')
    }
})
.catch((error)=>{
    console.log('error', error)
})
