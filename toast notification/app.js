let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fas fa-circle-check" style="color: green;"></i> Succesfully submitted'
let errorMsg = '<i class="fas fa-circle-xmark" style="color: red;"></i> Pleas fix this error!'
let invalidMsg = '<i class="fas fa-circle-exclamation" style="color: orange;"></i> Invalid input, check again'

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid')
    }

    setTimeout( () => {
        toast.remove();
    }, 6000)
}