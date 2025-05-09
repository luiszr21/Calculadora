function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.escutaTeclado(); 
        },

        escutaTeclado() {
            document.addEventListener('keyup', e => {
                const tecla = e.key

                if ('0123456789+-*/().'.includes(tecla)) {
                    this.btnParaDisplay(tecla)
                }
                if (tecla === 'Enter') {
                    e.preventDefault()
                    this.realizaconta()
                }
                if (tecla === 'Backspace') {
                    this.apagaUm()
                }
            });
        },

        realizaconta() {
            let conta = this.display.value
            try {
                conta = eval(conta);
                if (!conta && conta !== 0) {
                    alert('Conta Inválida')
                    return;
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('Conta Inválida')
                return;
            }
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaconta()
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora()
calculadora.inicia()
