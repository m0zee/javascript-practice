let alertBtn = document.querySelector('#alert');
let changeNameBtn = document.querySelector('#change_name');

alertBtn.addEventListener('click', function() {
    alert('Hello World');
});

// add event listener to the change name button
changeNameBtn.addEventListener('click', changeName);

// function to change the name
function changeName() {
    let name = prompt('Enter your name');
    let contentPara = document.querySelector('p');
    contentPara.textContent = 'Your name is: ' + name;
}