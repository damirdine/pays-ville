fetch('cities.json')
.then(res => res.json())
.then(json => data = app(json))

let selectCountry = document.querySelector('#country')
let tableContent = document.querySelector('#cityData')

function app(data){
    let listCountry = getCountry(data)
    displaySelectListOptions(listCountry,selectCountry)
    selectCountry.addEventListener("change", ()=>displayCity(searchByCountry(this.event.target.value,data)))
}
function getCountry(data){
    let listCountry = []
    data.forEach(ville => {
        let country = ville.countrycode.name
        if(!listCountry.includes(country)){
            listCountry.push(country)
        }
    })
    return listCountry.sort()
}
function searchByCountry(country,data){
    let listCity = []
    data.forEach(city => {
        let cityCountry = city.countrycode.name
        if(cityCountry==country){
            listCity.push(city)
        }
    })
    return listCity.sort((a, b) => parseFloat(a.name) - parseFloat(b.name))
}

function displaySelectListOptions(list){
    list.forEach(country => {
        selectCountry.innerHTML += `<option value="${country}">${country}</option>`
    })
}
function displayCity(list){
    list.forEach(city => {
        tableContent.innerHTML += `<tr>
        <td>${city.name}</td>
        <td>${city.population}</td>
    </tr>`
    })
}
