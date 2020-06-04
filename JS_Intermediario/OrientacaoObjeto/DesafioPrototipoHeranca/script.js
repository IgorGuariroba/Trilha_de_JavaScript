/**
 * @param {number} b
 * @param {number} h
 * */
function React(b, h)
{
    this.b = b;
    this.h = h;
    this.area = function ()
    {
      return  this.b * this.h;
    }
}



/**
 *
 * @param {number} l
 * */
function Square(l) {
   this.b = l;
   this.h = l;
}

//Para simular uma heranca atribuimos a function animal atraves do prototype 
Square.prototype =  new React();
// Então depois instanciamos o quadrado
var Square = new Square(5);
Square.area();