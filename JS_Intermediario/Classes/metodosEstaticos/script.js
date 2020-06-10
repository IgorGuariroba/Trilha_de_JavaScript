
/**
 * Dessa forma que declaramos uma classe em javaScript
 * E Criamos uma heraça atravez do extends
 * */
class Animal
{
    //Metodo statico não precisa ser instanciado
    static sleep()
    {
        console.log('zzzzzz');
    }

}

/***
 * Extends da classe animal
 * */
class Dog extends Animal{
    bark(){
        console.log('woof');
    }
}


//Instacia da classe Dog
var myDog = new Dog()
myDog.bark();

// este metodo não está mais disponivel porque o metodo statico agora faz parte apenas da classe
myDog.sleep();

//Será executado mesmo sem ser instanciado
//metodos estaticos fazem parte apenas da classe
Animal.sleep();
