function addBola()
{
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");
    // <div class="bola"></div>
    var px = Math.floor(Math.random() * 800);
    var py = Math.floor(Math.random() * 500);
    bola.setAttribute("style","left:"+px+"px; top:"+py+"px;");
    // <div class="bola" style="left: [xx]px; top: [yy]px;"></div>
    bola.setAttribute("onClick", "estourar(this)");
    // <div class="bola" style="left: [xx]px; top: [yy]px;" onClick="estourar(this)"></div>
    
    document.body.appendChild(bola);
}

function estourar(elemento)
{
    document.body.removeChild(elemento);
}

function iniciar()
{
    setInterval(addBola, 500);
}