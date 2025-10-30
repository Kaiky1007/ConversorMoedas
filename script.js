document.addEventListener('DOMContentLoaded', () => {

    const valorInput = document.getElementById('valor');
    const deSelect = document.getElementById('de');
    const paraSelect = document.getElementById('para');
    const converterBtn = document.getElementById('converter');
    const resultadoP = document.getElementById('resultado');

    const taxas = {
        'BRL': 1.0,
        'USD': 0.18587, 
        'EUR': 0.16051
    };

    converterBtn.addEventListener('click', () => {
        const valor = parseFloat(valorInput.value);
        const moedaDe = deSelect.value;
        const moedaPara = paraSelect.value;

        if (isNaN(valor) || valor <= 0) {
            resultadoP.textContent = 'Por favor, insira um valor numérico válido.';
            return; 
        }

        if (moedaDe === moedaPara) {
            resultadoP.textContent = 'As moedas de origem e destino não podem ser iguais.';
            return;
        }

        const valorEmBRL = valor / taxas[moedaDe];
        const valorConvertido = valorEmBRL * taxas[moedaPara];

        resultadoP.textContent = valorConvertido.toFixed(2);
    });
});