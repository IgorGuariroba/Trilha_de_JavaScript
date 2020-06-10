
/**
 * Dessa forma que declaramos uma classe em javaScript
 * E Criamos uma heraça atravez do extends
 * */
class Animal
{

    sleep()
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

    sleep() {
        console.log('the dog will sleep');
        // adicionamos uma função a classe pai
        //e ainda mantemos o comportamento anterio
        super.sleep();
    }
}


//Instacia da classe Dog
var myDog = new Dog()
myDog.bark();
myDog.sleep();


