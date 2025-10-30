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

        console.log('Botão clicado!'); 
    });
});