// QuickLaunch S.r.l. - Logica Sconto Summer Sale
document.getElementById('buy-btn').addEventListener('click', function() {
    const originalPrice = 500;
    const couponInput = document.getElementById('coupon').value.trim();
    const messageDisplay = document.getElementById('message');
    const finalPriceDisplay = document.getElementById('final-price-display');
    const finalPriceSpan = document.getElementById('final-price');

    // LOG OPERATIVO (Simulazione log per gli Ops)
    console.log("Tentativo di acquisto con coupon: " + couponInput);

    // Requisito Business: Codice "SUMMER26" applica sconto 20%
    if (couponInput === "SUMMER26") {
        const discount = originalPrice * 0.20;
        const finalPrice = originalPrice - discount;

        messageDisplay.innerText = "Sconto 20% applicato con successo!";
        messageDisplay.style.color = "green";
        
        finalPriceSpan.innerText = finalPrice;
        finalPriceDisplay.classList.remove('hidden');
        
        console.log("Successo: Prezzo scontato calcolato: " + finalPrice);
    } else if (couponInput === "") {
        messageDisplay.innerText = "Procedi all'acquisto senza sconto?";
        messageDisplay.style.color = "blue";
        finalPriceSpan.innerText = originalPrice;
        finalPriceDisplay.classList.remove('hidden');
    } else {
        messageDisplay.innerText = "Codice coupon non valido!";
        messageDisplay.style.color = "red";
        finalPriceDisplay.classList.add('hidden');
        
        console.warn("Errore: Coupon inserito errato.");
    }
});
