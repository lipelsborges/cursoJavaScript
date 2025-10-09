function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = function() {
    this.cliqueBotoes();
    this.pressionaBackSpace();
    this.pressionaEnter();
    this.display.focus();
  };

  this.pressionaBackSpace = function() {
    this.display.addEventListener('keydown', e => {
      if (e.key === 'Backspace') {
        e.preventDefault();
        this.clearDisplay();
      }
    });
  };

  this.pressionaEnter = function() {
    this.display.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = function() {
    let conta = this.display.value;

    try {
      
      conta = eval(conta);

      if (!conta && conta !== 0) {
        alert('Conta inválida');
        return;
      }

      this.display.value = String(conta);
    } catch (err) {
      alert('Conta inválida');
      return;
    }
  };

  this.clearDisplay = function() {
    this.display.value = '';
  };

  this.apagaUm = function() {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.cliqueBotoes = function() {
    document.addEventListener('click', e => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        this.clearDisplay();
      }

      if (el.classList.contains('btn-del')) {
        this.apagaUm();
      }

      if (el.classList.contains('btn-eq')) {
        this.realizaConta();
      }

      this.display.focus();
    });
  };

  this.btnParaDisplay = function(valor) {
    this.display.value += valor;
  };
}


function criaCalculadora() {
  return new Calculadora();
}

const calculadora = criaCalculadora();
calculadora.inicia();