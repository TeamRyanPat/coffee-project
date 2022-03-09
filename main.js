"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<p>' + coffee.name +" "+ coffee.roast + '</p>'
    // html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

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
    var txt = document.querySelector('#sort-name'); //same as getElementByID
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        // txt.value check what the user is typing
        if (coffee.roast === selectedRoast && coffee.name.includes(txt.value)) {
            filteredCoffees.push(coffee);
        }else if (coffee.all === selectedRoast && coffee.name.includes(txt.value)){
            filteredCoffees.push(coffee)
        }
        console.log(txt.value);
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', all:'all'},
    {id: 2, name: 'Half City', roast: 'light', all:'all'},
    {id: 3, name: 'Cinnamon', roast: 'light' , all:'all'},
    {id: 4, name: 'City', roast: 'medium', all:'all'},
    {id: 5, name: 'American', roast: 'medium', all:'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', all:'all'},
    {id: 7, name: 'High', roast: 'dark', all:'all'},
    {id: 8, name: 'Continental', roast: 'dark', all:'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', all:'all'},
    {id: 10, name: 'European', roast: 'dark', all:'all'},
    {id: 11, name: 'Espresso', roast: 'dark', all:'all'},
    {id: 12, name: 'Viennese', roast: 'dark', all:'all'},
    {id: 13, name: 'Italian', roast: 'dark', all:'all'},
    {id: 14, name: 'French', roast: 'dark', all:'all'},
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

var nameInput = document.querySelector('#sort-name');
nameInput.addEventListener('keyup', updateCoffees);
// nameInput.addEventListener('keyup', testfilter);