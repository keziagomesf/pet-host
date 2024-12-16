document.getElementById("calcularBotao").addEventListener("click", function () {
    const service = document.getElementById("service").value;
    const porte = document.getElementById("porte").value;
    const dias = parseInt(document.getElementById("dias").value);

    if (service.length == 0 || porte.length == 0 || dias.length == 0) {
        window.alert('[ERRO] Preencha todos os dados e verifique novamente!')
    } else {
        let basePrice;

        if (service === "daycare") {
            basePrice = porte === "pequeno" ? 80 : porte === "medio" ? 90 : 110;
        } else if (service === "hospedagem") {
            basePrice = porte === "pequeno" ? 70 : porte === "medio" ? 70 : 80;
        } else if (service === "recuperacao") {
            basePrice = porte === "pequeno" ? 200 : porte === "medio" ? 250 : 250;
        }

        const totalValue = basePrice * dias;
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