

const names = ["felipe", "luana", "joao", "ester"]

names.forEach((name)=> {
    console.log(`hi, ${name}`)
})


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach((number, index)=> {
    if( number % 2 == 0){
        console.log(number);
        console.log(`o numero ${number} esta na posição ${index}`);

    }
})

const cars = [
    {
        marca: "Ford",
        modelo: "ká"
    },

    {
        marca: "BMW",
        modelo: "X6"
    },

    {
        marca: "Fiat",
        modelo: "FastBack"
    },

    {
        marca: "Audi",
        modelo: "A5"
    }
];

cars.forEach((car) => {
    console.log(`marca: ${car.marca} - modelo: ${car.modelo}`)
})


class Cars{
    constructor(Car, Brand){
        this.Car = Car;
        this.Brand = Brand;
    }
}

class CarsList{
    constructor(){
        this.allCars = []
    }
    addNewCars(param){
        this.allCars.push(param)
    }
}


const list2 = new CarsList()

function GetCar(){
    const car = document.getElementById("car").value
    const Brand = document.getElementById("brand").value

    const car2 = new Cars(car, Brand);

    list2.addNewCars(car2);

   document.getElementById("car").value = ""
   document.getElementById("brand").value = ""

    console.log(list2)
}