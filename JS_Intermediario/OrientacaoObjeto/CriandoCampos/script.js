var field;
/***
 *
 *
 * @param cols
 * @param rows
 * @param containerId
 * @constructor
 */
function Field(cols, rows, containerId)
{
    this.cols = cols;
    this.rows = rows;
    this.container = document.querySelector(containerId);

    /**
     * criando os campos da tabela
     * */
    this.createField = function ()
    {
        var field = [];
        for(var i = 0; i <this.rows; i++)
        {
                field[i] = [];
            for (var j = 0; j < this.cols; j++)
            {
                //criando um obstaculo de maneira aleatoria
                field[i].push(this.createRock())
            }
        }
        this.field = field;
        this.drawField();
    }
    /**
     * Esta function cria um obstaculo
     * */
    this.createRock = function ()
    {
        // criar um numero aleatorio e eliminar o decimal
        return Math.trunc(Math.random() * 5) ===1 ? '@' : '';
    }

    /**
     * Criar o html da nossa tabela
     * criar uma linha nova e criar as colunas
     * Para exibir na tela
     * */
    this.drawField = function ()
    {
        var template = '';
        for(var i = 0; i < this.rows; i++)
        {
            template += '<tr>';
            for (var j = 0; j < this.cols; j++)
            {
                template += `<td>${this.field[i][j]}</td>`;
           }
            template += '</tr>';
        }
        this.container.innerHTML = template;
    }
}


field = new Field(3, 4, '#myTable');
field.createField();