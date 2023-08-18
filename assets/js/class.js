// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.array = []
//     }

//     introduce() {
//         console.log(`olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
//     }

//     getName() {
//         return this.name
//     }

//     getAge() {
//         return this.age
//     }

// }

// const user1 = new User('João', 30);
// user1.introduce();

// const user2 = new User('Felipe', 17);
// user2.introduce();



// class Pizza {
//     constructor(base, sauce, toppings, cheese) {
//         this.base = base;
//         this.sauce = sauce;
//         this.toppings = toppings;
//         this.cheese = cheese;
//     }

//     getDesc() {
//         return `uma deliciosa pizza ${this.name},
//          com base de ${this.sauce},
//          com cobertura de ${this.toppings} 
//          e com queijo do tipo ${this.cheese}`
//     }

//     getPriceBase() {
//         if (this.base == 'tradicional') {
//             return 5;
//         } else if (this.base == 'integral') {
//             return 7;
//         } else {
//             return `não trabalhamos com essa base: ${this.base}`
//         }
//     }
//     getPriceSauce() {
//         if (this.sauce == 'tomato') {
//             return 3;
//         } else if (this.sauce == 'pezzo') {
//             return 6;
//         } else {
//             return `não trabalhamos com essa base: ${this.base}`
//         }
//     }
//     getPricetoppings() {
//         if (this.toppings == 'peperoni') {
//             return 4;
//         } else if (this.sauce == 'chiken') {
//             return 7;
//         } else {
//             return `não trabalhamos com essa cobertura: ${this.base}`
//         }
//     }
//     getPricecheese() {
//         if (this.cheese == 'cheddar') {
//             return 10;
//         } else if (this.cheese == 'mozzarella') {
//             return 6;
//         } else {
//             return `não trabalhamos com essa base: ${this.base}`
//         }
//     }
//     getTotalPrice() {
//         return this.getPriceBase() + this.getPriceSauce() + this.getPricetoppings() + this.getPricecheese();
//     }
// }

// const pizza1 = new Pizza(`tradicional`, `tomato`, `peperoni`, `cheddar`);
// console.log(pizza1)

// console.log(pizza1.getDesc())
// console.log(pizza1.getTotalPrice()) 


// class calculator{
//     add(a,b){
//         return a + b;
//     }
//     multiply(a,b){
//         return a * b;
//     }
//     divide(a,b){
//         return a / b;
//     }
// }

// const calculator = new calculator();
// console.log(calculator.multiply(2,3));

// const multiply = calculator.multiply(2,3);
// console.log(multiply);

class Witch {
    constructor(name, patron, house, wand) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.wand = wand
        this.spellLearned = []
    }
    getName() {
        return `o nome do(a) bruxo(a) é ${this.name}`
    }
    getHouse() {
        return `o nome da casas do(a) bruxo(a) é ${this.house}`
    }
    getFullDescription() {
        return `o nome do(a) bruxo(a) é ${this.name}, o nome da casas do(a) bruxo(a) é ${this.house}, o patronomo é ${this.patron} e sua varinha é ${this.wand} `
    }
    learnedASpell(spell) {
        this.spellLearned.push(spell)
        console.log(`o(a) bruxo(a): ${this.name} aprendeu o feitiço${spell}`);
    }
}

// const witch1 = new Witch('Hermione Granger','Otter','Gryffindor','vine wood and dragon heartstring');
// console.log(witch1)

// console.log(witch1.getName());

// console.log(witch1.getFullDescription());

// witch1.learnedASpell("accio");

// witch1.learnedASpell("fury");

// witch1.learnedASpell("wingardium leviosa");

class typeWitch extends Witch {
    constructor(name, patron, house, wand, typeWitch) {
        super(name, patron, house, wand);
        this.typeWitch = typeWitch;
    }

    getTypeWitch() {
        if (this.typeWitch == "M") {
            return `O tipo de bruxo(a) é ${this.typeWitch} - Muggle`;
        } else if (this.typeWitch == "P") {
            return `O tipo de bruxo(a) é ${this.typeWitch} - Puro`;
        }
        else {
            return `Não é um bruxo(a)!`;
        }
    }
}

const witch1 = new typeWitch('Hermione Granger', 'Otter', 'Gryffindor', 'vine wood and dragon heartstring', 'm');

console.log(witch1.getTypeWitch())


class chamberOfSecret {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd; //atributo privado;

        this.checkPwd = (pwdInput) => {
            if(_pwd == pwdInput){
                return true
            }else{
                return false
            }
        }

    }

acessChamber(pwdInput){
    if(this.checkPwd(pwdInput)){
        return `Bem vindo(a) ${this.name} a camara secreta`
    }else{
        return `senha incorreta`
    }
}
}

const user1 = new chamberOfSecret('Harry Potter', '1234');
let pwdInput = '1234';

console.log(user1.acessChamber(pwdInput))
