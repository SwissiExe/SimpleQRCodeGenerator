const btngen = document.getElementById("btn");
const url = document.getElementById("inputvalue");
const qrimg = document.getElementById("img");
const qrCodeContainer = document.querySelector('.qr-code-container');




btngen.addEventListener("click", () => {
    let input = url.value;
    if(!input) return;

    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input}`;
    
    qrCodeContainer.classList.add('show');
});