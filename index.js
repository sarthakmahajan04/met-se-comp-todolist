let add = document.querySelector("#new_todo");
let pop = document.querySelector(".popup");

console.log(pop);

add.addEventListener("click", function (){
    console.log("click");
    pop.style.display ="flex";
})

let save= document.querySelector("#save");
let closed= document.querySelector("#close");

save.addEventListener("click", function (){
    if(document.querySelector("input").value==""){
        alert(`Please enter the name!!`);
    }
});


closed.addEventListener("click", function (){
    pop.style.display ="none";
});