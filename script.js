document.addEventListener('DOMContentLoaded', () => {

    const valorInput = document.getElementById('valor');
    const deSelect = document.getElementById('de');
    const paraSelect = document.getElementById('para');
    const converterBtn = document.getElementById('converter');
    const resultadoP = document.getElementById('resultado');

    const taxas = {
        'BRL': 1.0,
        'USD': 0.18587, 
        'EUR': 0.16051,
        'JPY': 28.63,
        'GBP': 0.14
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

        const formatadorDe = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: moedaDe
        });

        const formatadorPara = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: moedaPara
        });

        resultadoP.textContent = `${formatadorDe.format(valor)} equivale a ${formatadorPara.format(valorConvertido)}`;
    });
});

// === Alternar entre tema claro e escuro ===
function alternarTema() {
    const body = document.body;
    const botao = document.getElementById("toggle-theme");

    body.classList.toggle("dark-mode");

    // Atualiza o texto do botão
    if (body.classList.contains("dark-mode")) {
        botao.textContent = "☀️ Tema Claro";
        localStorage.setItem("tema", "escuro");
    } else {
        botao.textContent = "🌙 Tema Escuro";
        localStorage.setItem("tema", "claro");
    }
}

// Verifica o tema salvo ao carregar o site
window.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    const botao = document.getElementById("toggle-theme");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        botao.textContent = "☀️ Tema Claro";
    } else {
        botao.textContent = "🌙 Tema Escuro";
    }

    botao.addEventListener("click", alternarTema);
});
