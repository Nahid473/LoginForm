
function convert(){
    const celcius=document.getElementById("celcius").value
    Number.parseInt(celcius.value)
const result=document.getElementById("result")
let result1=Number.parseInt(celcius)*9/5+32;
result1=Math.floor(result1)
    result.innerHTML=result1

}
