//Criar um objeto da classe data
//var myDate = new Date();
//Prototipo
//Date.prototype

/*
*  Functiona para criar um objeto
* Quando fazer a verificação se o objeto foi instanciado
* corrigimos a possibilidade de nossa variavel ser de escopo global
* Porque caso ela não sejá atribuimos o new Pencil a ela assim se tornando uma
* instancia de Pencil caso o usuario tenha esquecido
* */
function Pencil(color, length) {
    // variavel não faz parte do objeto e só existe dentro do nosso construtor
    var code = 153;
    //caso não seja uma instancia de Pencil ele retornara uma instancia de Pencil
    if (!(this instanceof Pencil)){
        return new Pencil(color,length);
    }
    //a propiedade this indica o proprio objeto
    this.color  = color;
    //tamannho do lapis
    this.length  = length;

    //funçaõ para imprimir o texto no console
    this.write = function (text) {
        //Irmprimir o texto
        console.log(text);

    }
    /**
     * Para expor a variavel podemos criar uma função
     * Que irá retornar o valor desta variavel para o objeto com o uso do this
     * */
    this.getCode = function () {
        return code;
    }
    /**
     * Desta forma podemos alterar a variavel privada
     * */
    this.setCode =  function (value) {
        code = value;
    }
    /**
     * Neste caso  está função não faz parte do escopo global
     * E não vai estar disponivel fora do escopo deste construtor
     * */
    function myFunction() {

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
// O retorno desta variavel será undefined porque ela no foi atribuida no this do objeto
myPencil.code;
myPencil.getCode();



/*
* criaremos um objeto com as mesmma propiedades
* neste caso estamos instanciando um objeto apartir do contrutor
* Se não atribuimos o new ela será tratada como uma fuction normal
* O problema é que uma function comum será executada como escopo global
* mypencil2 será undefined
* se acessamos a variavel color ou write
* eles iram está em escopo global
* é recomendado não utilizarmos escopo globais
* È boa pratica instanciar com o new
* */
var myPencil2 = Pencil("blue",20);
myPencil2.color;
myPencil2.length;
myPencil2.write("cdb");

/*
* Podemos verificar se o objeto é parte de um prototipo ou classe
* teremo o retorno boolean
*
*Caso ele sejá executado sem o new ele será uma instancia de window e não de
* Pencil
* */
myPencil instanceof Pencil;

/**
 * otodo objeto possui uma propedade chamada prototype
 * Que contem todas as funçoes do objetos
 * podemos inserir com o prototype nova propriedades e metodos
 * Criamos uma propriedade  para um objeto mesmo depois de instanciados
 * */
Pencil.prototype.number = 5;