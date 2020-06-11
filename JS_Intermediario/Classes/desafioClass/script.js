/**
 * @param {number} b
 * @param {number} h
 * */
class React{
    constructor(b, h) {
        this.b = b;
        this.h = h;
    }
    area(){
        return  this.b * this.h;
    }
}


/**
 *
 * @param {number} l
 * */
class Square extends React{
    constructor(l) {
        super(l,l);
    }
}

// Então depois instanciamos o quadrado
var square = new Square(5);