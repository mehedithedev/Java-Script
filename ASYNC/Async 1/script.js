const apiKEY='https://restcountries.com/v3.1/all'
document.querySelector('button').addEventListener('click',showCountries)
function showCountries(events) {
    let xhr= new XMLHttpRequest
    xhr.open('GET', apiKEY, true)  // Initializing the request 
    xhr.send()  // Sending the request

    xhr.onload=()=>{
        if (xhr.status==200){
            console.log('sucessfull')
            let allCountries= this.response
            console.log(allCountries)
        }
    }

}

