

function repositorios()
{


var userName = document.querySelector('#user').value;
var listElement = document.createElement('li'); 
var textElement = document.createTextNode('Carregando...'); 
listElement.appendChild(textElement); 
listElement.setAttribute('id', 'loading');
var addListElement = document.querySelector('#list'); 
addListElement.appendChild(listElement);


axios.get('https://api.github.com/users/'+userName+'/repos')
.then(function(response)
{   
    var result = document.createTextNode('Resultado da Pesquisa: ')
    var addListElement = document.querySelector('#list'); 
    addListElement.appendChild(result);
    
      for(var t = 0; t < response.data.length; t++)
      {
          var listElement = document.createElement('li'); 
          var textElement = document.createTextNode('Nome do Repositório '+ (t+1)+': ' + response.data[t].name); 
          listElement.setAttribute('id', 'li'+t);
          listElement.appendChild(textElement); 
          var addListElement = document.querySelector('#list'); 
          addListElement.appendChild(listElement);
      }
    clearError();
    clearLoading();
})
.catch(function(error)
{
    
    clearError();
    var errorElement = document.createElement('p'); 
    var errorText = document.createTextNode(error); 
    errorElement.setAttribute('id', 'error');
    errorElement.appendChild(errorText);
    document.querySelector('body').appendChild(errorElement);
    clearLoading();
});

}


function clearError()
{
    var clearError = document.querySelector('#error');
        if(clearError)
                clearError.parentNode.removeChild(clearError);
}

function clearLoading()
{
    var removeLoading = document.querySelector("#loading");
    
    if(removeLoading)
     removeLoading.parentNode.removeChild(removeLoading);
}
