function mudouOpcao(objeto)
{
    console.log("Selecionou: "+objeto.value);
}

function focou()
{
    console.log("Caixa de texto recebeu foco");
}

function desfocou()
{
    console.log("Caixa de texto perdeu foco");
}

function validar()
{
    var campo = document.getElementById('nome').value;
    if(campo.length > 0)
    {
        return true;        
    }
    else
    {
        alert("É necessário informar um Nome!");
        return false;
    }
}