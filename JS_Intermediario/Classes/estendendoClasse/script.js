
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
}


//Instacia da classe Dog
var myDog = new Dog();