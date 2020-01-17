/*
var xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://api.github.com/users/davidscarmo');
xhr.send(null);

xhr.onreadystatechange = function()
{
    if(xhr.readyState === 4)//4 é o valor de quando a requisição está ok
    {
        console.log(JSON.parse(xhr.responseText)); //o formato que é retornado pela api é JSON, então usa-se o JSON + parse pra transformar em um objeto
        var objJSON = JSON.parse(xhr.responseText);
        console.log(objJSON.login);// retorna o nome de usuario 
    }
}

*/

/* Promise 

var minhaPromise = function()
{
    return new Promise(function(resolve, reject)
    {
        var xhr = new XMLHttpRequest(); 

        xhr.open('GET', 'https://api.github.com/users/davidscarmo');
        xhr.send(null);

        xhr.onreadystatechange = function()
        {
            if(xhr.readyState === 4)//4 é o valor de quando a requisição está ok
            {
                if(xhr.status === 200)// código 200 de status é o cod de sucesso
                {
                resolve(JSON.parse(xhr.responseText));
                }
                else
                {
                    reject('Erro na requisição');
                }
            }
        }

    });
}

 minhaPromise()
    .then(function(response)
    {
        console.log(response);
    })
    .catch(function(error)
    {
        console.warn(error);
    });

    */ 
   
  axios.get('https://api.github.com/users/davidscarmo')
   .then(function(response)
   {
       console.log(response);
   })
   .catch(function(error)
   {
       console.warn(error);
   });
