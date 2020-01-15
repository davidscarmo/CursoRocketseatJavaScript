var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button"); 

/*armazena o json do local storage na forma de array caso possua algo armazenado em toDos
ou (caso não tenha nada amarzenado) armazena um array vazio */
var toDos = JSON.parse(localStorage.getItem('list_toDos')) || []; 

 

function renderToDos()
{
    listElement.innerHTML = ''; //"limpa" o html antes de adicionar os elementos do array
    for(toDo of toDos)
    {
        var toDoElement = document.createElement('li'); 
        var toDoText = document.createTextNode(toDo); 

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode(' Excluir'); 

        linkElement.appendChild(linkText); 

        var pos = toDos.indexOf(toDo); //armazena a posição atual de ToDo com base em ToDos 
        linkElement.setAttribute('onclick', 'deleteToDo('+ pos +')');

        toDoElement.appendChild(toDoText); 
        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement); 
    }
}

renderToDos();

function addToDo()
{
    var toDoText = inputElement.value; 
    toDos.push(toDoText); // adiciona o valor do input dentro da array toDos
    inputElement.value = '';
    renderToDos();
    saveToStorage();//armazena toDos(atual) no local storage
}

buttonElement.onclick = addToDo; //chama a função add to do após clicar no botão

function deleteToDo(pos)
{
    toDos.splice(pos, 1); //array.splice(posição passada e um elemento pra ser removido);
    renderToDos();
    saveToStorage();//armazena toDos(atual) no local storage
}

function saveToStorage()
{
    
    localStorage.setItem('list_toDos', JSON.stringify(toDos)); //armazena o item no local storage(nome do arquivo, transforma o array toDos em json)  
}