console.log("hello world");

const btn = document.querySelector("#send");
btn.addEventListener("click", function(e){
    e.preventDefault();
    
    
    function capturarValorNota (trimestre){
        var nota = document.querySelector("#nota"+trimestre);
        var vNota = nota.value;
        console.log(vNota);
        return vNota;
    }
    
    //Main    
        var valorNotaNum1 = Number(capturarValorNota(1));
        var valorNotaNum2 = Number(capturarValorNota(2));
        var valorNotaNum3 = Number(capturarValorNota(3));
    
    //calcular a média das notas
    const media = ((valorNotaNum1 + valorNotaNum2 + valorNotaNum3)/3);
    console.log(media);
    
    document.getElementById("media").innerHTML = "<p> a sua média é de .: "+ (media.toFixed(2));
})

