
/**
 * Dessa forma que declaramos uma classe em javaScript
 * @param {string} color
 * @param {String} text
 * */
class Pencil
{
    constructor(color)
    {
        this.color = color;
    }

    write(text)
    {
        console.log(text);
    }
}

//Instacia da classe Pencil
var myPencil = new Pencil('red');