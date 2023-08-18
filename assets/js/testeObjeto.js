// let personsimple = "jhoe Doe";

// const personObject = {
//     firstname: "Jhoe",
//     lastname:"Doe",
//     age:50,
//     eyeColor:"blue"
// };

// console.log(personsimple);
// console.log(personObject);

function nome(){

const nomesPessoas = {
    firstname: document.getElementById("ip1").value ,
    lastname: document.getElementById("ip2").value ,
    eyecolor: document.getElementById("ip3").value ,
    age: document.getElementById("ip4").value
}
document.getElementById("p").innerHTML = `O cliente ${nomesPessoas.firstname} ${nomesPessoas.lastname} tem ${nomesPessoas.age} anos e a cor dos olhos é ${nomesPessoas.eyecolor}!`
}