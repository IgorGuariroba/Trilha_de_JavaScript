
/**
 * Prototipo Animal
 * */
function Animal() {
    this.sleep = function () {
        console.log("zzzzzzzzz");
    }
}



/**
 * Prototipo Dog
 * */
function Dog() {
    this.bark = function () {
        console.log("wo0f");
    }
}

//Para simular uma heranca atribuimos a function animal atraves do prototype 
Dog.prototype =  new Animal();
// Então depois instanciamos o animal em dog
var myDog = new Dog();