"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    //Txt is checking where you are typing
    var txt = document.querySelector('#sort-name');
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        // txt.value check what the user is typing
        if (coffee.roast === selectedRoast && coffee.name.includes(txt.value)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
// make function that sorts coffee id by descending order
/*
function to search through the coffees by name,
display only the coffees that match
the provided search term (You will need to add an input field to the existing form for this)*/




// update display: show coffee printout of what user types upon selection
// var coffeeName = function(){
//     var txt = document.querySelector('#sort-name');
//     var filtercof =[]
//     filtercof = txt.value
//     tbody.innerHTML = renderCoffees(txt.value);
//     console.log(txt.value)
// };
//
// var testfilter =function (){
//     var table = document.querySelector('#coffeetable');
//     var tr = table.getElementsByTagName("tr");
//     var td, textvaule;
//     for (var i = 0; i <tr.length; i++){
//         td =tr[i].getElementsByTagName("td")[0];
//         if (td){
//             textvaule= td.textContent || td.innerText;
//
//         }
//     }
// }

var nameInput = document.querySelector('#sort-name');
nameInput.addEventListener('keyup', updateCoffees);
// nameInput.addEventListener('keyup', testfilter);