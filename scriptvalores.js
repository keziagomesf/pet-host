document.getElementById("calcularBotao").addEventListener("click", function () {
    const servico = document.getElementById("service").value;
    const porte = document.getElementById("porte").value;
    const dias = parseInt(document.getElementById("dias").value);

    if (servico.length == 0 || porte.length == 0 || dias.length == 0) {
        window.alert('[ERRO] Preencha todos os dados e verifique novamente!')
    } else {
        let basePreco;

        if (servico === "daycare") {
            basePreco = porte === "pequeno" ? 80 : porte === "medio" ? 90 : 110;
        } else if (servico === "hospedagem") {
            basePreco = porte === "pequeno" ? 70 : porte === "medio" ? 70 : 80;
        } else if (servico === "recuperacao") {
            basePreco = porte === "pequeno" ? 200 : porte === "medio" ? 250 : 250;
        }

        const totalValue = basePreco * dias;
        let discountValue = totalValue;

       
        if (dias > 10) {
            discountValue = totalValue * 0.9; 
        }


        document.getElementById("totalValue").textContent = `Valor Total: R$ ${totalValue.toFixed(2)}`;

        if (dias > 10) {
            document.getElementById("discountValue").textContent = `Valor com Desconto: R$ ${discountValue.toFixed(2)}`;
        } else {
        
            document.getElementById("discountValue").textContent = '';
        }

        document.getElementById("result").style.display = "block";
    
    }
});