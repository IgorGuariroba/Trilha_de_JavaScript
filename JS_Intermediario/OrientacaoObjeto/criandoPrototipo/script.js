//Criar um objeto da classe data
//var myDate = new Date();
//Prototipo
//Date.prototype

/*
*  Functiona para criar um objeto
* */
function Pencil(color, length) {
    //a propiedade this indica o proprio objeto
    this.color  = color;
    //tamannho do lapis
    this.length  = length;

    //funçaõ para imprimir o texto no console
    this.write = function (text) {
        //Irmprimir o texto
        console.log(text);

    }

}

/*
* Criaremos um objeto do tipo Pencil e guadaremos em uma variavel
* instanciando um objeto apartir do contrutor
* */
var  myPencil = new Pencil("red",15);

/*
* Exibir no console as functions
* da function Pencil
* */
myPencil.color;
myPencil.length;
myPencil.write("abc");



/*
* criaremos um objeto com as mesmma propiedades
* neste caso estamos instanciando um objeto apartir do contrutor
* */
var myPencil2 = new Pencil("blue",20);
myPencil2.color;
myPencil2.length;
myPencil2.write("cdb");

/*
* Podemos verificar se o objeto é parte de um prototipo ou classe
* teremo o retorno boolean
* */
myPencil instanceof Pencil;

