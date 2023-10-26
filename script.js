'use strict';

const addMovie = document.getElementById('add-movie');
const addToTable = document.querySelector('.add-to-table');

//form inputs
const inputName = document.getElementById('name');
const inputRating = document.getElementById('rating');
const inputDate = document.getElementById('date');

//init values
let currentId = 0;

const addCurrentId = () => {
	currentId += 1;
}

const addChildToTable = (addToTable) => {

	const newRow = `<tr>
                        <th>${currentId}</th>
                        <th>${inputName}</th>
                        <th>${inputDate}</th>
                        <th>${inputRating}</th>
                    </tr>`

	        addToTable.insertAdjacentHTML('afterend', newRow);
}


addMovie.addEventListener('click', () => {
	addCurrentId();
	addChildToTable(addToTable);
})