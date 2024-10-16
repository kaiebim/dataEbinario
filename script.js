
let button = document.getElementById("button");
let HORA = document.getElementById("HORA");

button.addEventListener("click",function(){
    HORA.innerText = (new Date).toString();
})

let number = document.getElementById("number");
let buttonbinario = document.getElementById("buttonbinario");
let binario = document.getElementById("binario");
let binariodobro = document.getElementById("binariodobro");
let binariotriplo = document.getElementById("binariotriplo");

buttonbinario.addEventListener("click",function(){
    toBinario(number.value,binario);
    toBinario((number.value)*2,binariodobro);
    toBinario((number.value)*3,binariotriplo);
})

function toBinario(numero,qual){
    qual.innerHTML = "binario * " + (numero/number.value) + " = ";
    let final = "";
    while (numero!==0) {
        if (numero===1){
            final+="1";
            numero=0;
        }
        else{
            final+=(numero%2).toString();
            numero = Math.floor(numero/2);
        }
    }
    let arr = final.split("");
    for (let index = 0; index < arr.length; index++) {
        qual.innerHTML += arr[arr.length-index-1];
    }
}

