const fieldone = document.getElementById("email");
const copiaEmail = document.getElementById('copiaEmail');

fieldone.addEventListener('input', (e) => {
    copiaEmail.innerHTML = e.target.value;
});