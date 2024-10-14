document.getElementById("calcularBotao").addEventListener("click", function() {
    const service = document.getElementById("service").value;
    const porte = document.getElementById("porte").value;
    const dias = parseInt(document.getElementById("dias").value);

    if (service && porte && dias) {
        let basePrice;

        // Define o preço base com base no serviço e porte
        if (service === "daycare") {
            basePrice = porte === "pequeno" ? 80 : porte === "medio" ? 90 : 110;
        } else if (service === "hospedagem") {
            basePrice = porte === "pequeno" ? 90 : porte === "medio" ? 120 : 150;
        } else if (service === "recuperacao") {
            basePrice = porte === "pequeno" ? 200 : porte === "medio" ? 250 : 250;
        }

        const totalValue = basePrice * dias;
        let discountValue = totalValue;

        // Aplica desconto, se aplicável
        if (dias > 5) {
            discountValue = totalValue * 0.9; // 10% de desconto
        }

        // Exibe os resultados
        document.getElementById("totalValue").textContent = `Valor Total: R$ ${totalValue.toFixed(2)}`;
        document.getElementById("discountValue").textContent = `Valor com Desconto: R$ ${discountValue.toFixed(2)}`;
        document.getElementById("result").style.display = "block";
    }
});