fetch('cities.json')
.then(res => res.json())
.then(json => console.log(getPays(json)))


function app(data){
    let listPays = getPays(data);
    let selectPays = document.querySelector('#country')
    
}

function getPays(data){
    let listPays = []
    data.forEach(ville => {
        let pay = ville.countrycode.name
        if(!listPays.includes(pay)){
            listPays.push(pay)
        }
    });
    return listPays
}

function displayList(list,dom){
    list.forEach(

    )
}