/* eslint-disable no-unused-vars */
localStorage.setItem('userId', 2212142);

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const val = valueInput.value;

    //
    localStorage.setItem(id, val);
    idInput.value = '';
    valueInput.value = '';
};
