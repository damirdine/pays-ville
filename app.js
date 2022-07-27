fetch('cities.json')
.then(res => res.json())
.then(json => app(json))


function app(data){
    let listCountry = getPays(data)
    let selectCountry = document.querySelector('#country')
    displayList(listCountry,selectCountry)
}

function getPays(data){
    let listCountry = []
    data.forEach(ville => {
        let pay = ville.countrycode.name
        if(!listCountry.includes(pay)){
            listCountry.push(pay)
        }
    });
    return listCountry
}

function displayList(list,select){
    list.forEach(country => {
        select.innerHTML += `<option value="${country}">${country}</option>`
    });
}