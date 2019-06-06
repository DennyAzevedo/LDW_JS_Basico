window.onload = function()
{
    var botao = document.getElementById("btn");
    
    var botaoClicado = function()
    {
        alert("Botão clicado!!!");
    }
    
    //botao.attachEvent("onclick", botaoClicado); -- IE8
    
    //Event.addHand(botao, "click", botaoClicado);
    
    botao.onclick = botaoClicado;
}