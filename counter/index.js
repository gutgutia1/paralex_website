// let counter=parseInt(document.querySelector("#counter").textContent)
counter_val=document.querySelector("#counter")
// dec_b=document.querySelector("#decrement_button")
// console.log(dec_b)
document.getElementById("decrement_button").addEventListener("click",decrement);
function increment(){
    let counter=parseInt(document.querySelector("#counter").textContent)
    counter=counter+1
    counter_val.textContent=counter
}
function decrement(){
    let counter=parseInt(counter_val.textContent)
    counter=counter-1
    counter_val.innerHTML=counter
}

