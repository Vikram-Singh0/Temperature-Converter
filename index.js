

// const input=document.getElementById("input");
// const ctof=document.getElementById("ctof");
// const ftoc=document.getElementById("ftoc");
// const submit=document.getElementById("btn");
// const result=document.getElementById("results");
// let temp;

// function convert(){
// if(ctof.checked){
//     temp=Number(input.value);
//     temp=(temp*9/5)+32;
//     result.textContent=temp ;

    
// }
// else if(ftoc.checked){
//     temp=Number(input.value);
//     temp=5/9*(temp-32);
//     result.textContent=temp ;

// }
// else{
//     result.textContent="Plaese Select an radio button"
// }
// }

const input = document.getElementById("input");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
const result = document.getElementById("results");

function convert() {
    let temp;
    if (ctof.checked) {
        temp = Number(input.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = `${temp} °F`;
    } else if (ftoc.checked) {
        temp = Number(input.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = `${temp} °C`;
    } else {
        result.textContent = "Please select a conversion option.";
    }
}
