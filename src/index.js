/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const val = valueInput.value;

    //

    id && val ? localStorage.setItem(id, val) : '';

    idInput.value = '';
    valueInput.value = '';
};

const getData = () => {
    const data = { ...localStorage };
    const div = document.querySelector('#data');
    div.innerHTML = data;
};
